import React, { Component } from "react";
import "./App.css";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import PokemonDisplay from "./components/PokemonDisplay";

//Redux
import { Provider } from "react-redux";
import store from "./store";

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
