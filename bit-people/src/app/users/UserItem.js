import React from 'react';

export const UserItem = (props) => {
    const { name, photo } = props.user;
    return (
        <div className="collection">
            <div className="collection-item avatar">
                <img src={photo} alt="user-img" className="circle" />
                <span className="title"><b>Name:</b>{name}</span>
                <p>{props.user.getUserEmail()}</p>
                <p>{props.user.getDate()}</p>
            </div>
        </div>
    )
}