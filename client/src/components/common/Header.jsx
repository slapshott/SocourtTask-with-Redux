import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        const { loggedIn, onLogout } = this.props;

        return (
            <header>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                {loggedIn && <a href="javascript:void(0)" onClick={onLogout}>Logout</a>}
                {!loggedIn && <NavLink to="/login" activeClassName="active">Login</NavLink>}
                {!loggedIn && <NavLink to="/register" activeClassName="active">Register</NavLink>}
                <NavLink to="/api/books" activeClassName="active">Books</NavLink>
                <NavLink to="/api/genres" activeClassName="active">Genres</NavLink>
                <NavLink to="/api/books/search" activeClassName="active">Search By Name</NavLink>
                <NavLink to="/api/genres/search" activeClassName="active">Search By Genre</NavLink>
                <NavLink to="/api/book/create" activeClassName="active">Create Book</NavLink>
                <NavLink to="/api/genre/create" activeClassName="active">Create Genre</NavLink>
            </header>
        );
    }
}