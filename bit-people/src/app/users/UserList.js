import React from 'react';
import { UserItem } from './UserItem';
import { UserCard } from './UserCard';


export const UserList = (props) => {

    const { users, inputValue } = props;

    const filterUsers = (users, value) => {
        return users.filter((user, index) => user.name.includes(value));
    }

    const renderListItems = (users) => {
        if (inputValue === "") {
            return (
                <div className="row">
                    {users.map((user, index) => {
                        return <UserItem key={index} user={user} />
                    })}
                </div>
            )
        } else {
            return (
                <div className="row">
                    {filterUsers(users, inputValue)
                        .map((user, index) => {
                            return <UserItem key={index} user={user} />
                        })}
                </div>
            )
        }
    }

    const renderCardItems = (users) => {
        if (inputValue === "") {
            return (
                <div className="row">
                    {users.map((user, index) => {
                        return <UserCard key={index} user={user} />
                    })}
                </div>
            )
        } else {
            return (
                <div className="row">
                    {filterUsers(users, inputValue)
                        .map((user, index) => {
                            return <UserCard key={index} user={user} />
                        })}
                </div>
            )
        }
    }

    const displayLayout = (users) => {
        const showStorageView = localStorage.getItem("listView");

        return showStorageView === "true"
            ? renderListItems(users)
            : renderCardItems(users)
    }



    return (
        <div className="container">
            <div className="row">
                {displayLayout(users)}
            </div>
        </div>
    )
}