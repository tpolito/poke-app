import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer";

export default combineReducers({
  pokemons: pokemonReducer
});

//This combines all the reducers into one folder to be read by the store
