import React from 'react';

const Searchbox = ({ searchfield, searchChange }) => {
    return(
        <div className='pa3'>
            <input 
                className='bg-lightest-blue pa1'
                type='search' 
                placeholder='search your nerd...'
                onChange={searchChange} 
            />
        </div>
    );
}

export default Searchbox;