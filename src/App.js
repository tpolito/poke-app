import React, { Component } from "react";
import "./App.css";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import Landing from "./components/Landing";
import PokemonDisplay from "./components/PokemonDisplay";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/pokemon/:id" component={PokemonDisplay} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
