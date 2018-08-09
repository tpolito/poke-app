import React, { Component } from "react";

class Pokemon extends Component {
  render() {
    const { pokemon } = this.props;
    if (pokemon.pokemons.types && pokemon.pokemons.types[1]) {
      console.log("has two types");
    } else {
      console.log("has one type");
    }
    // console.log(pokemon.pokemons);
    return (
      <div>
        <p>Name: {pokemon.pokemons.name}</p>
        <p>#: {pokemon.pokemons.id}</p>
        {pokemon.pokemons.sprites && (
          <img src={pokemon.pokemons.sprites.front_default} alt="" />
        )}{" "}
        {pokemon.pokemons.types && (
          <p>Type1: {pokemon.pokemons.types[0].type.name}</p>
        )}
      </div>
    );
  }
}

export default Pokemon;
