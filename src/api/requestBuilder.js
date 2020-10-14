import axios from 'axios';
export const pictureURL = 'https://image.tmdb.org/t/p/original/';


const requestBuilder = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
})

export default requestBuilder;

