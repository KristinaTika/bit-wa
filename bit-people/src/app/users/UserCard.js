import React from 'react';

export const UserCard = (props) => {
    const { name, photo } = props.user;
    return (

        <div className="col s4">
            <div className="card">
                <div className="card-image">
                    <img src={photo} alt="user-img" />
                    <span className="card-title">{name}</span>
                </div>
                <div className="card-content">
                    <p><i className="tiny material-icons">email</i><b>Name:</b> {props.user.getUserEmail()}</p>
                    <p><i className="tiny material-icons">cake</i><b>Date of birth:</b> {props.user.getDate()}</p>
                </div>
            </div>
        </div>

    )
}

