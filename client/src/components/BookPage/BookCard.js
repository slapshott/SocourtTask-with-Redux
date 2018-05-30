import React from 'react';
import { Link } from 'react-router-dom'

export default function BookCard ({name, author, genre, creationDate, lastUpdate, id}) {
    
    return(
        <div className="container">
            <strong> 
                <span>{name} by {author}</span><br/>
                <Link to={'/api/book/' + id}>View Details</Link>
            </strong>
        </div>
    )
}