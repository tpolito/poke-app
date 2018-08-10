import React, { Component } from "react";

class Pokemon extends Component {
  render() {
    const { pokemon } = this.props;
    // if (pokemon.pokemons.types && pokemon.pokemons.types[1]) {
    //   console.log("has two types");
    // } else {
    //   console.log("has one type");
    // }

    if (pokemon.pokemons.types && pokemon.pokemons.types[1]) {
      return (
        <div className="row">
          <div className="col s4 offset-s2">
            {pokemon.pokemons.sprites && (
              <img src={pokemon.pokemons.sprites.front_default} alt="" />
            )}{" "}
          </div>
          <div className="col s6">
            <p>#{pokemon.pokemons.id}</p>
            {pokemon.pokemons.types && (
              <p>Typing: {pokemon.pokemons.types[0].type.name}</p>
            )}
            {pokemon.pokemons.types && (
              <p>Typing: {pokemon.pokemons.types[1].type.name}</p>
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p>Name: {pokemon.pokemons.name}</p>
          <p>#{pokemon.pokemons.id}</p>
          {pokemon.pokemons.sprites && (
            <img src={pokemon.pokemons.sprites.front_default} alt="" />
          )}{" "}
          {pokemon.pokemons.types && (
            <p>Typing: {pokemon.pokemons.types[0].type.name}</p>
          )}
        </div>
      );
    }
  }
}

export default Pokemon;
