import React from 'react';
fetch
import { UserCard } from './UserCard';

export const UserGrid = (props) => {
    const userGrid = props.user
    return (
        <div className="container">
            <div className="row">
                {userGrid.map((user, index) => {
                    return <UserCard key={index} user={user} />
                })}
            </div>
        </div>
    )
}

import React, { Component } from 'react';
import { fetchUsers } from '../../service/userService';
import { UserItem } from './UserItem';

export class UserList extends Component {
    constructor() {
        super()
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        fetchUsers()
            .then(users => {
                this.setState({
                    users: users
                })
                console.log(this.state.users);
            })
    }

    render() {
        const userList = this.state.users;

        return (
            <div className="container">
                <div className="row">
                    {userList.map((user, index) => {
                        return <UserItem key={index} user={user} />
                    })}
                </div>
            </div>
        )
    }
}