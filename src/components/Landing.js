import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  state = {
    id: "",
    randomId: ""
  };

  onSubmit = e => {
    const { id } = this.state;

    this.props.history.push(`/pokemon/${id}`);
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const randomId = Math.floor(Math.random() * 720);

    return (
      <React.Fragment>
        <div className="row">
          <div className="input-field col s8 offset-s2">
            <h1>Pokemon Lookup</h1>

            <form onSubmit={this.onSubmit}>
              <label htmlFor="id">Pokemon Number</label>
              <input
                onChange={this.onChange}
                type="text"
                name="id"
                placeholder="124"
                minLength="1"
                maxLength="3"
                required
              />
              <span className="helper-text">
                Enter the # of the Pokemon you would like to see
              </span>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s8 offset-s2">
            <Link to={`/pokemon/${randomId}`} className="btn">
              Random Pokemon
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;
