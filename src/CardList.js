import React from 'react';
import Card from './Card';

const CardList = ({ users }) => {
    const cardComponent = users.map(
        (user, i) => {
            return <Card id={users[i].id} name={users[i].name} username={users[i].username} quote={users[i].quote} /> 
        }
    )
    return(
        <div className='tc'>
            <h1>CS Nerds</h1>
            {cardComponent}
        </div>
    );
}

export default CardList;