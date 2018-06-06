import React, { Component } from 'react';
import { fetchUsers } from '../../service/userService';
import { UserItem } from './UserItem';
import { UserCard } from './UserCard';


export class UserList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {

        fetchUsers()
            .then(users => {
                console.log(users);

                this.setState({
                    users
                })
            })
    }

    renderListItems(users) {
        return (
            <div className="row">
                {users.map((user, index) => {
                    return <UserItem key={index} user={user} />
                })}
            </div>
        )
    }

    renderCardItems(users) {
        return (
            <div className="row">
                {users.map((user, index) => {
                    return <UserCard key={index} user={user} />
                })}
            </div>
        )
    }

    render() {
        const userList = this.state.users;
        const { viewMode } = this.props;
        return (
            <div className="container">
                <div className="row">
                    {
                        viewMode
                            ? this.renderCardItems(userList)
                            : this.renderListItems(userList)
                    }
                </div>
            </div>
        )
    }

}


