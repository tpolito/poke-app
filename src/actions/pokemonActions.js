import { GET_POKEMON } from "./types";
import axios from "axios";

export const getPokemon = id => async dispatch => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  dispatch({
    type: GET_POKEMON,
    payload: res.data
  });
};
