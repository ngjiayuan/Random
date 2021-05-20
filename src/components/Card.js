import React from 'react';

const Card = ({ name, username, quote }) => {
    return (
        <div className='bg-lightest-blue tc dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${username}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{quote}</p>
            </div>
        </div>
    )
}

export default Card;