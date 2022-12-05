import { Movie } from '@/types'
import axios, { AxiosResponse } from 'axios'

const THE_MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3/movie/'
const THE_MOVIE_DB_API_KEY = import.meta.env.VITE_MOVIE_DB_API_KEY
export const THE_MOVIE_DB_IMAGES_BASE_URL_ORIGINAL = 'https://image.tmdb.org/t/p/original'
export const THE_MOVIE_DB_IMAGES_BASE_URL_W_400 = 'https://image.tmdb.org/t/p/w400'

export interface GetMoviesResponse {
	results: Movie[]
}

export const getNowPlayingMovies = (): Promise<AxiosResponse<GetMoviesResponse>> => {
	return axios.get(`${THE_MOVIE_DB_BASE_URL}now_playing`, {
		params: {
			api_key: THE_MOVIE_DB_API_KEY,
		},
	})
}

export const getPopularsMovies = (): Promise<AxiosResponse<GetMoviesResponse>> => {
	return axios.get(`${THE_MOVIE_DB_BASE_URL}popular`, {
		params: {
			api_key: THE_MOVIE_DB_API_KEY,
		},
	})
}
// Deberia ir en una carpeta utils quizas, pero lo pongo aca para evitar otra carpeta y simular lo que en futuro seria un llamado a la API en realidad
export const getMoviesFromLocalStorage = () => {
	const moviesInStorage = window.localStorage.getItem('movies')
	if (moviesInStorage) {
		return JSON.parse(moviesInStorage)
	} else {
		return []
	}
}
