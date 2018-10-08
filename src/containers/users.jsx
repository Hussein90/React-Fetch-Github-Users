import React, { Component } from 'react';
import '../styles/App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import SideBar from "../components/SideBar";
import Main from "../components/Main";



const newUrl = "https://api.github.com/users";


/*
{
    "login": "mojombo",
    "id": 1,
    "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mojombo",
    "html_url": "https://github.com/mojombo",
    "followers_url": "https://api.github.com/users/mojombo/followers",
    "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
    "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
    "organizations_url": "https://api.github.com/users/mojombo/orgs",
    "repos_url": "https://api.github.com/users/mojombo/repos",
    "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mojombo/received_events",
    "type": "User",
    "site_admin": false
  }

*/
class Users extends Component {
  state = {
    users: [],
    lastId: null
  };

  componentDidMount() {
    fetch(newUrl)
      .then(response => response.json())
      .then(users => this.setState({
        users,
        lastId: users.reduce((id, user) => user.id > id ? user.id : id, 0)
      })
      );
  }

  addMore = () => {
    const url = `${newUrl}?since=${this.state.lastId}`;

    fetch(url)
      .then(response => response.json())
      .then(users => this.setState((prevState) => ({
        users: [...prevState.users, ...users],
        lastId: users.reduce((id, user) => user.id > id ? user.id : id, prevState.lastId)
      }))
      );
  }


  render() {
    const { users } = this.state;
    return (
      <Router>
        <div className="container-fluid">
          <Route
            path="/"
            exact={true}
            render={() => <h4>Fetch API with React and React Router Demo</h4>}
          />
          <div className="space-top">
            <div className="row">
              <div className="col-sm">
                <SideBar users={users} />
                <button onClick={this.addMore}>Fetch</button>
              </div>
              <div className="col-sm">
                
                <Main users={users} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}



export default Users;
