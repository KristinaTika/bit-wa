import React from 'react';

export const UserItem = (props) => {
    const { name, photo, gender } = props.user;
    console.log(gender);

    const pinkColor = () => {
        if (gender === "female") {
            return "collection-item avatar red lighten-5"
        } else {
            return "collection-item avatar"
        }
    }
    return (
        <div className="collection">
            <div className={pinkColor()}>
                <img src={photo} alt="user-img" className="circle" />
                <p><b>Name:</b>{name}</p>
                <p><i className="tiny material-icons">email</i>{props.user.getUserEmail()}</p>
                <p><i className="tiny material-icons">cake</i>{props.user.getDate()}</p>
            </div>
        </div>
    )
}