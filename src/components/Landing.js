import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  state = {
    id: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { id } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <h1>LANDING PAGE</h1>
            <h2>
              <Link to={`/pokemon/${id}`}>Pokemon</Link>
            </h2>
            <input
              onChange={this.onChange}
              type="text"
              name="id"
              maxLength="3"
              required
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
