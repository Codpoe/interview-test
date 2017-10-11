import React, { Component } from 'react';
import UserItem from '../UserItem/UserItem.js';

import './UserList.css';

const UserList = ({users, handleDelClick}) => {
    return (
        <div className="user-list">
            <ul>
                {users.map((user) => (
                    <li key={user.name}>
                        <UserItem
                            user={user}
                            handleDelClick={handleDelClick}>
                        </UserItem>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList;