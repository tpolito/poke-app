import { GET_POKEMON } from "./types";
import axios from "axios";

export const getPokemon = () => async dispatch => {
  const res = await axios.get("https://pokeapi.co/api/v2/pokemon/6");
  dispatch({
    type: GET_POKEMON,
    payload: res.data
  });
};
