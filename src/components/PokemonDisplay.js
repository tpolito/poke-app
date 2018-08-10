import React, { Component } from "react";
import Pokemon from "./Pokemon";
import { connect } from "react-redux";
import { getPokemon } from "../actions/pokemonActions";
import { Link } from "react-router-dom";

class PokemonDisplay extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPokemon(id);
  }

  render() {
    const { pokemons } = this.props;
    return (
      <div className="container z-depth-1">
        <h1 className="col s12 center-align">
          Displaying{" "}
          <span
            style={{
              color: "red",
              textTransform: "capitalize",
              textDecoration: "underline",
              textDecorationColor: "black"
            }}
          >
            {pokemons.pokemons.name}
          </span>
        </h1>
        <Pokemon pokemon={pokemons} />
        <Link to="/">Back To Landing</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemons: state.pokemons
});

export default connect(
  mapStateToProps,
  { getPokemon }
)(PokemonDisplay);
