import { Movie } from '@/types'
import axios, { AxiosResponse } from 'axios'

const THE_MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3/movie/'
const THE_MOVIE_DB_API_KEY = import.meta.env.VITE_MOVIE_DB_API_KEY
export const THE_MOVIE_DB_IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/original/'

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
