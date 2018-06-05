const password = require('passport')
const encryption = require('../util/encryption');
const User = require('mongoose').model('User');

module.exports = {
    
    registerPost: async (req, res) => {
        const reqUser = req.body;
        console.log(reqUser)
        
        try {
            const salt = encryption.generateSalt();
            const hashedPass =
            encryption.generateHashedPassword(salt, reqUser.password);
            const user = await User.create({
                username: reqUser.name,
                hashedPass,
                salt,
                roles: []
            })
            password.authenticate('local-signup', (err, token, userData) => {
                if (err) {
                    if (err.name === 'IncorrectCredentialsError') {
                        return res.status(200).json({
                            success: false,
                            message: err.message
                        });
                    }
        
                    return res.status(200).json({
                        success: false,
                        message: 'Could not process the form.'
                    });
                }
            })
            return res.status(200).json(user);
            
        } catch (e) {
            console.log(e);
            res.locals.globalError = e;
            res.status(404).json({Error: e})
        }
    },

    logout: (req, res) => {
        req.logout();
        res.redirect('/');
    },
    
    loginPost: async (req, res) => {
        const reqUser = req.body;
        try {
            const user = await User.findOne({ username: reqUser.name });
            if (!user) {
                errorHandler('Invalid user data');
                return;
            }
            if (!user.authenticate(reqUser.password)) {
                errorHandler('Invalid user data');
                return;
            }

            req.logIn(user, (err, user) => {
                if (err) {
                    errorHandler(err);
                } else {
                    res.redirect('/');
                    res.json(user)
                }
            });
        } catch (e) {
            errorHandler(e);
        }

        function errorHandler(e) {
            console.log(e);
            res.locals.globalError = e;
            res.redirect('/login');
        }
    }

    
};