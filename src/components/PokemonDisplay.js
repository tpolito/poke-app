import React, { Component } from "react";
import Pokemon from "./Pokemon";
import { connect } from "react-redux";
import { getPokemon } from "../actions/pokemonActions";

class PokemonDisplay extends Component {
  componentDidMount() {
    this.props.getPokemon();
  }

  render() {
    const { pokemons } = this.props;
    return (
      <div className="container">
        <h1 className="col s12 center-align">
          Displaying{" "}
          <span style={{ color: "red" }}>{pokemons.pokemons.name}</span>
        </h1>
        <Pokemon pokemon={pokemons} />
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
