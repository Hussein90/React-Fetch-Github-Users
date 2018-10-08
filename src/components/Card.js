import React from "react";

import {  toTitleCase } from "../components/helpers";

const Card = ({ user }) => {
  if (!user) {
    return (
      <div>
        <p>Please select a user</p>
      </div>
    );
  }

  const {
    
    id,
    email,
    login,
    avatar_url
  } = user;

  return (
    <div>
      <div className="card" style={{ width: "20rem" }}>
        <img className="card-img-top" src={avatar_url} alt={login} />
        <div className="card-body">
          <h4 className="card-title">
            {`${toTitleCase(login)}`}
          </h4>
          <div className="card-text">
            <p>
              <strong>ID:</strong> {id}
            </p>
            <p>
              <strong>Username:</strong> {login}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Created at:</strong> {user.created_at}
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
