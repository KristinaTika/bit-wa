import React from 'react';

export const UserItem = (props) => {
    const { name, photo } = props.user;
    return (
        <div className="collection">
            <div className="collection-item avatar">
                <img src={photo} alt="user-img" className="circle" />
                <span className="title"><b>Name:</b>{name}</span>
                <p><i className="tiny material-icons">email</i><b>Email:</b>{props.user.getUserEmail()}</p>
                <p><i className="tiny material-icons">cake</i><b>Date of birth:</b>{props.user.getDate()}</p>
            </div>
        </div>
    )
}