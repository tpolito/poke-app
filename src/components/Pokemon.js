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
          <div className="col s12 m8 offset-m2 16 offset-13">
            <div className="card-panel z-depth-1">
              <div className="row valign-wrapper">
                <div className="col-s2">
                  {pokemon.pokemons.sprites && (
                    <img
                      className="center-align"
                      src={pokemon.pokemons.sprites.front_default}
                      alt=""
                    />
                  )}{" "}
                </div>
                <div className="col s10">
                  <h4>#{pokemon.pokemons.id}</h4>
                  {pokemon.pokemons.types && (
                    <h5>
                      Typing:{" "}
                      <span style={{ textTransform: "capitalize" }}>
                        {pokemon.pokemons.types[0].type.name}
                      </span>{" "}
                      and{" "}
                      <span style={{ textTransform: "capitalize" }}>
                        {pokemon.pokemons.types[1].type.name}
                      </span>
                    </h5>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="col s12 m8 offset-m2 16 offset-13">
            <div className="card-panel z-depth-1">
              <div className="row valign-wrapper">
                <div className="col-s2">
                  {pokemon.pokemons.sprites && (
                    <img
                      className="center-align"
                      src={pokemon.pokemons.sprites.front_default}
                      alt=""
                    />
                  )}{" "}
                </div>
                <div className="col s10">
                  <h4>#{pokemon.pokemons.id}</h4>
                  {pokemon.pokemons.types && (
                    <h5>
                      Typing:{" "}
                      <span style={{ textTransform: "capitalize" }}>
                        {pokemon.pokemons.types[0].type.name}
                      </span>
                    </h5>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Pokemon;
