import React from 'react';
import Card from './Card';

const CardList = ({ users }) => {
    return(
        <div>
            {
                users.map((user, i) => {
                    return (
                    <Card 
                        key={i} 
                        id={users[i].id} 
                        name={users[i].name} 
                        username={users[i].username} 
                        quote={users[i].quote} 
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;