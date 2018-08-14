import React, { Component } from "react";

class Moves extends Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div className="row">
        <div className="col s12 m8 offset-m2 16 offset-13">
          <div className="card-panel z-depth-1">
            <div className="row center-align">
              {" "}
              <h3 className="center-align">Moves</h3>
            </div>
            <div className="row valign-wrapper">
              <ul>
                {pokemon.pokemons.moves &&
                  pokemon.pokemons.moves.map(move => (
                    <li style={{ textTransform: "capitalize" }}>
                      {move.move.name}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Moves;
