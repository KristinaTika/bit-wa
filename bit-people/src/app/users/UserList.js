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

    
    const { viewMode, users } = props;
        return (
            <div className="container">
                <div className="row">
                    {
                        viewMode
                            ? renderCardItems(users)
                            : renderListItems(users)
                    }
                </div>
            </div>
        )
    }