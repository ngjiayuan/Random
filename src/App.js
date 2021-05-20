import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';
import Searchbox from './components/Searchbox';
import { nerds } from './const';
import Scroll from './components/Scroll';

const App = () => {
    const [users, setUsers] = useState(nerds);
    const [searchfield, setSearchfield] = useState('');

    // componentDidMount
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(user => setUsers(user))
    // }, [])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    const filteredUsers = users.filter(user => {
        return user.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    return !users.length ? 
    <h1>Fetching nerds</h1> :
    (
        <div className='tc'>
            <h1>CS Nerds</h1>
            <p><i>the Best and Worst of CS</i></p>
            <Searchbox searchChange={onSearchChange} />
            <Scroll>
                <CardList users={filteredUsers} />
            </Scroll>
        </div>
    );
}

export default App;