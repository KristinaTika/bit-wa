import React from 'react';

const UserListItem = (props) => {

    const { name, picture, gender } = props.user;






    return (
        <div className="collection">
            <div className="collection-item avatar">
                <img src={picture} alt="user-img" className="circle" />
                <p><b>Name:</b>{name}</p>
                <p><i className="tiny material-icons">email</i></p>
                <p><i className="tiny material-icons">cake</i></p>
            </div>
        </div>
    );
};

export default UserListItem;