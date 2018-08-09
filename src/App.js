import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
// import { getPokemon } from "./actions/pokemonActions";
import PokemonDisplay from "./components/PokemonDisplay";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PokemonDisplay />
        </div>
      </Provider>
    );
  }
}

export default App;
