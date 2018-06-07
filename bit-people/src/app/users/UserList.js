import React from 'react';
import { UserItem } from './UserItem';
import { UserCard } from './UserCard';


export const UserList = (props) => {


    const renderListItems = (users) => {
        return (
            <div className="row">
                {users.map((user, index) => {
                    return <UserItem key={index} user={user} />
                })}
            </div>
        )
    }

    const renderCardItems = (users) => {
        return (
            <div className="row">
                {users.map((user, index) => {
                    return <UserCard key={index} user={user} />
                })}
            </div>
        )
    }

    const displayLayout = (users) => {
        const showStorageView = localStorage.getItem("listView");

        return showStorageView === "true"
            ? renderListItems(users)
            : renderCardItems(users)
    }
    


    const { users } = props;
    return (
        <div className="container">
            <div className="row">
                {displayLayout(users)}
            </div>
        </div>
    )
}