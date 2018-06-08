import React from 'react';
import UserList from './UserList';
import { userService } from '../../service/UserService';

class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        userService.getUsers()
            .then((users) =>{
                this.setState({users})
            })
    }



    render() {
        const {users} = this.state;
        return (
            <div>
                <UserList users ={users}/>
            </div>
        );
    }
};

export default UserPage;