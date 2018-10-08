import React from "react";
import { Link } from "react-router-dom";

import { toTitleCase } from "../components/helpers";



const SideBar = ({ users }) => {
  return (
    <div className="col s3 z-depth-1 App-col-all">
      <div className="row">
        <ol className="list-group">
          {users ? (
            users.map(user => {
              const { avatar_url, login, id } = user;
              return (
                <li key={id} className="list-group-item">
                  <Link to={`${login}`}>
                     {id})&nbsp;
                     <img className="card-img-top sidebar" src={avatar_url} alt={login} />
                    {`${toTitleCase(login)}`}
                  </Link>
                  
                </li>
                
              );
            })
          ) : (
            <div>Loading...</div>
          )}
        </ol>
      </div>
    </div>
  );
};

export default SideBar;
