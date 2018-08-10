import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  state = {
    id: ""
  };

  onSubmit = e => {
    const { id } = this.state;

    this.props.history.push(`/pokemon/${id}`);
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { id } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="input-field col s8 offset-s2">
            <h1>Type # Of Pokemon</h1>

            <form onSubmit={this.onSubmit}>
              <label htmlFor="id">Pokemon Number</label>
              <input
                onChange={this.onChange}
                type="text"
                name="id"
                maxLength="3"
                required
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
