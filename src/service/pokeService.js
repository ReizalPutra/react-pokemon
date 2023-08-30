import axios from 'axios';

export function getPokemon({ url }) {
  return axios.get(url)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      return null;
    });
}

export function getAllPokemon(url) {
  return axios.get(url)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      return null;
    });
}
