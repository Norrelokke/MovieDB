import axios from 'axios'

const baseURL = 'https://api.themoviedb.org'
const APIKEY = '?api_key=89ff8f49db669e76da191e37de9c197b'
const genre = '&sort_by=&with_genres='
/**
 * @returns Promise
 */

const get = async (endpoint) => {
    const res = await fetch(baseURL + endpoint + APIKEY)
    if (!res.ok) {
        throw new Error("Something is wrong with the request!")
    }
    return res.json()
}
/**
 * @returns Promise
 */


const getById = async (endpoint, Id) => {
    const res = await axios.get(baseURL + endpoint + APIKEY + genre + Id)
    // .then((res) => res.json()) //2
    // .then((value) => {
    //   console.log(value.results); //3
    if (!res.ok) {
        throw new Error("Something is wrong with the request!")
    }
    return res.json()
}


export const getpopularMovies = async () => {
    return get('/3/movie/popular');
}

export const getlatestMovies = async () => {
    return get('/3/movie/latest');
}
export const getTopRatedMovies = async () => {
    return get('/3/movie/top_rated');
}

export const getGenres = async () => {
    return get('/3/genre/movie/list');
}

export const getGenresById = async (Id) => {
    return await get('/3/discover/movie', Id);
}

// export const getGenresById = async (Id) => {
//     return getById('/3/discover/movie', Id);
// }


export const getMovie = async () => {
    return get('/3/movie/550');
}

export default {
    getpopularMovies,
    getlatestMovies,
    getTopRatedMovies,
    getGenres,
    getGenresById,
    getMovie,
}