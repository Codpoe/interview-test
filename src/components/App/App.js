import React, { Component } from 'react';
import UserListContainer from '../../containers/UserListContainer';
import AddUser from '../../containers/AddUser/AddUser.js';

import './App.css';

const App = (props) => {
    return (
        <div className="app">
            <UserListContainer></UserListContainer>
            <AddUser></AddUser>
        </div>
    )
};

export default App;