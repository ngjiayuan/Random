import React from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import { users } from './const';

const App = () => {
    return(
        <div className='tc'>
            <h1>CS Nerds</h1>
            <p><i>the Best and Worst of CS</i></p>
            <Searchbox />
            <CardList users={users} />
        </div>
    );
}

export default App;