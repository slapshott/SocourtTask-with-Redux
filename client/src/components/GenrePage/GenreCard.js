import React from 'react';

export default function GenreCard ({name, creationDate, lastUpdate}) {

    return (
        <div className="container">
            <ul>
                <li>{name} since {creationDate} and last updated {lastUpdate}</li>
            </ul>
        </div>
    )
}