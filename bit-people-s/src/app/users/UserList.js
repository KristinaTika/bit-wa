import React from 'react';
import UserListItem from './UserListItem';
import UserCard from './UserCard';

const UserList = (props) => {

    const {users} = props;

    const renderUserGrid = (userList) => {
        const cards = userList.map((user) => {
            return <UserCard user = {user} />
        })

        return (
            cards
        )
    }

    const renderUserList = (userList) => {
        return userList.map((user) => {
            return <UserListItem user = {user} />
        })
    }

    return (
        <div className='row'>
           {renderUserGrid(users)}
        </div>
    );
};

export default UserList;