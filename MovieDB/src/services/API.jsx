import axios from 'axios'

const baseURL = 'https://api.themoviedb.org'
const APIKEY = '?api_key=89ff8f49db669e76da191e37de9c197b'
const Genre = '&sort_by=&with_genres='
const Cast = '&sort_by=&with_cast='
const PageStr = '&page='
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

const getGenre = async (endpoint, Id, page) => {
    const res = await fetch(baseURL + endpoint + APIKEY + Genre + Id + PageStr + page )
    if (!res.ok) {
        throw new Error("Something is wrong with the request!")
    }
    return res.json()
}
const getCast = async (endpoint, Id) => {
    const res = await fetch(baseURL + endpoint + APIKEY + Cast + Id)
    if (!res.ok) {
        throw new Error("Something is wrong with the request!")
    }
    return res.json()
}


export const getpopularMovies = async () => {
    return get('/3/movie/popular');
}

export const getlatestMovie = async () => {
    return get('/3/movie/latest');
}
export const getTopRatedMovies = async () => {
    return get('/3/movie/top_rated');
}

export const getGenres = async () => {
    return get('/3/genre/movie/list');
}

export const getGenresById = async (Id, page) => {
    return  getGenre('/3/discover/movie', Id, page);
}

export const getMovie = async (Id) => {
    return await get(`/3/movie/${Id}`);
}
export const getMovieCredits = async (Id) => {
    return await get(`/3/movie/${Id}/credits`);
}
export const getPerson = async (Id) => {
    return await get(`/3/person/${Id}`);
}

export const getMoviesWithPerson = async (Id) => {
    return await getCast('/3/discover/movie', Id);
}

export default {
    getpopularMovies,
    getlatestMovie,
    getTopRatedMovies,
    getGenres,
    getGenresById,
    getMovie,
    getMovieCredits,
    getPerson,
}