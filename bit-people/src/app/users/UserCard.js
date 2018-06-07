import React from 'react';

export const UserCard = (props) => {
    const { name, photo, gender } = props.user;
    

    const pinkColor = () => {
        if (gender === "female") {
            return "card pink lighten-5"
        } else {
            return "card"
        
        }
    }

    return (

        <div className="col s4">
            <div className={pinkColor()}>
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

