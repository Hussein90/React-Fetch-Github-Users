import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Card from "../components/Card";

const yourUrl = "https://api.github.com/users/{login}";
class Userdata extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    this.fetchUserIfNeeded();
  }

  componentDidUpdate() {
    this.fetchUserIfNeeded();
  }

  fetchUserIfNeeded() {
    if (!this.props.user) {
      return;
    }

    fetch(yourUrl.replace("{login}", this.props.user.login))
      .then(response => response.json())
      .then(user => this.setState({ user }));
  }

  render() {
    const { user } = this.state;

    if (!user) return null;

    return <Card user={user} />;
  }
}

const Main = ({ users }) => {
  return (
    <div className="col s9">
      {users && (
        <Route
          path="/:userId"
          render={({ match }) => {
            return (
              <Userdata
                user={users.find(u => u.login === match.params.userId)}
              />
            );
          }}
        />
      )}
    </div>
  );
};

export default Main;

