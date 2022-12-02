import axios from 'axios'

const THE_MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3/movie/'
const THE_MOVIE_DB_API_KEY = import.meta.env.VITE_MOVIE_DB_API_KEY
export const THE_MOVIE_DB_IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/original/'

export const getNowPlayingMovies = () => {
	return axios.get(`${THE_MOVIE_DB_BASE_URL}now_playing`, {
		params: {
			api_key: THE_MOVIE_DB_API_KEY,
		},
	})
}

export const getPopularsMovies = () => {
	return axios.get(`${THE_MOVIE_DB_BASE_URL}popular`, {
		params: {
			api_key: THE_MOVIE_DB_API_KEY,
		},
	})
}
