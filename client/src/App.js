import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/common/Header';
import RegisterPage from './components/Auth/RegisterPage';
import LoginPage from './components/Auth/LoginPage';
import HomePage from './components/HomePage/HomePage';
// Book
import BookList from './components/BookPage/BookList'
import DetailsBook from './components/BookPage/DetailsBook';
import BookByName from './components/BookPage/BookByName';
// Genre
import GenreList from './components/GenrePage/GenreList';
import BooksByGenreId from './components/GenrePage/BooksByGenreId';
import BooksByGenre from './components/BookPage/BooksByGenre';

class App extends Component {
    constructor(props) {
        super(props);

        this.onLogout = this.onLogout.bind(this);
    }

    onLogout() {
        localStorage.clear();
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="App">
                <Header loggedIn={localStorage.getItem('authToken') != null} onLogout={this.onLogout} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    {/* Book */}
                    <Route path="/api/books/search" component={BookByName} />
                    <Route path="/api/books" component={BookList} />
                    <Route path="/api/book/:id" component={DetailsBook} />
                    {/* Genre */}
                    <Route path="/api/genres/search" component={BooksByGenre} />
                    <Route path="/api/genres" component={GenreList} />
                    <Route path="/api/genre/:id" component={BooksByGenreId} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);