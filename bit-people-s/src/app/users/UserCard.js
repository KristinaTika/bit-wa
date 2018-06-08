import React from 'react';

const UserCard = ({ user }) => {



    return (
        <div className="col s4 m4 l4">
            <div className="card">
                <div className="card-image">
                    <img src={user.picture.medium} />
                    <span className="card-title">{user.name.first}</span>
                </div>
                <div className="card-content">
                    <p><i className="tiny material-icons">email</i>{user.email}</p>
                    <p><i className="tiny material-icons">cake</i>{user.dob}</p>
                  
                </div>
            </div>
        </div>

    );
};

export default UserCard;