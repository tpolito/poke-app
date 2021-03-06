import React, { Component } from "react";
import Pokemon from "./pokemon_info/Pokemon";
import Moves from "./pokemon_info/Moves";

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
      <div className="row">
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
          </span>{" "}
          Number #{" "}
          <span
            style={{
              color: "red",
              textTransform: "capitalize",
              textDecoration: "underline",
              textDecorationColor: "black"
            }}
          >
            {pokemons.pokemons.id}
          </span>
        </h1>
        <div className="row">
          <Pokemon pokemon={pokemons} />
          <Moves pokemon={pokemons} />
          <Link to="/">
            <i className="fas fa-arrow-circle-left" /> Back To Landing
          </Link>
        </div>
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
