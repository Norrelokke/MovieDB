const baseURL = 'https://api.themoviedb.org'
const APIKEY = '?api_key=89ff8f49db669e76da191e37de9c197b'


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


export const getpopularMovies = async() => {
    return get('/3/movie/popular');
}

export const getMovie = async() => {
    return get('/3/movie/550');
}