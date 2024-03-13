import React, { useState } from 'react'


const IMG_API = 'https://image.tmdb.org/t/p/w1280'

const setVoteClass = (vote) => {
    if(vote >= 8){
        return 'green'
    } else if (vote >= 6) {
        return 'orange'
    } else {
        return 'red'
    }
};



const Movie = ({ title, poster_path, overview, vote_average, release_date}) => {
    const [isCardVisible, setCardVisible] = useState(false);

    const showCard = () => {
    setCardVisible(true);
    };

    const hideCard = () => {
    setCardVisible(false);
    };

    function Card({ onClose }) {
        return (
            <div className="card">
                <div className="card-content">
                    <div className='movie-over'>
                        <h2>Overview:</h2>
                        <h1>{title}</h1>
                        <p>{overview}</p>
                        <button onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='movie ' key={Movie.id}>
            <div className='movie-info'>
                <img src={poster_path ? (IMG_API + poster_path) : 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWV8ZW58MHx8MHx8fDA%3D'} alt={title} />
                <p>Release Date: <span>{release_date}</span></p>
                <p>Title: <span>{title}</span></p>
                <p>Rating: <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span></p>
            </div>
            <button className='overview-button' onClick={showCard}>See Overview</button>

            {isCardVisible && <Card onClose={hideCard} />}
        </div>
    )   
}

export default Movie;
