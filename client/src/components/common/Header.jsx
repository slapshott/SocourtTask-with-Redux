import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        const { loggedIn, onLogout } = this.props;

        return (
            <header>
                <NavLink exact to="/"  className="button">Home</NavLink>
                {loggedIn && <a href="javascript:void(0)" onClick={onLogout} className="button">Logout</a>}
                {!loggedIn && <NavLink to="/login" className="button">Login</NavLink>}
                {!loggedIn && <NavLink to="/register" className="button">Register</NavLink>}
                <NavLink to="/api/books" className="button">Books</NavLink>
                <NavLink to="/api/genres" className="button">Genres</NavLink>
                <NavLink to="/api/books/search" className="button">Search By Name</NavLink>
                <NavLink to="/api/genres/search" className="button">Search By Genre</NavLink>
                <NavLink to="/api/book/create" className="button">Create Book</NavLink>
            </header>
        );
    }
}