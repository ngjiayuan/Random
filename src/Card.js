import React from 'react';

const Card = ({ id, name, username, quote }) => {
    return (
        <div className='bg-light-blue tc dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${username}`} />
            <div>
                <h2>{name}</h2>
                <p>{quote}</p>
            </div>
        </div>
    )
}

export default Card;