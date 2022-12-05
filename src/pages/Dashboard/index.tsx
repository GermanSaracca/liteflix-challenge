import { useEffect, useState } from 'react'
import Button from '@/components/ui/Button'
import MoviesList from '@/containers/MoviesList'
import { PlayNoCircle, Plus } from '@/components/ui/Icons'
import {
	getNowPlayingMovies,
	getPopularsMovies,
	THE_MOVIE_DB_IMAGES_BASE_URL_ORIGINAL,
} from '@/services'
import { Movie } from '@/types'
import style from './index.module.scss'
import LoadingScreen from '@/components/LoadingScreen'

const Dashboard = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [error, setError] = useState<boolean>(false)
	const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null)
	const [popularMovies, setPopularMovies] = useState<Movie[] | null>(null)

	useEffect(() => {
		const getMovie = async () => {
			setIsLoading(true)

			try {
				const promises = [getNowPlayingMovies(), getPopularsMovies()]

				const [nowPlayingMoviesPromise, popularMoviesPromise] = await Promise.allSettled(promises)

				// Atrapamos el error solo si falla el llamado a la pelicula principal
				if (nowPlayingMoviesPromise.status === 'fulfilled') {
					const { value } = nowPlayingMoviesPromise

					const { results: nowPlayingMovies } = value.data

					setFeaturedMovie(nowPlayingMovies[0])
				} else {
					throw new Error()
				}

				// Si fallara este llamado igualmente mostrariamos la pelicula principal
				if (popularMoviesPromise.status === 'fulfilled') {
					const { value } = popularMoviesPromise

					const { results: popularMovies } = value.data
					/*
						Hago un slice para evitar mostar en populares la pelicula de la portada
						ya que en ambos endpoints viene en la posicion 0
					*/
					setPopularMovies(popularMovies.slice(1, 5))
				}
			} catch (e) {
				setError(true)
				console.error(e)
			} finally {
				setIsLoading(false)
			}
		}

		getMovie()
	}, [])

	if (error) {
		return <div>Some error fullscreen o se podria hacer retries en el fetch o un redirect</div>
	}

	if (isLoading) {
		return <LoadingScreen />
	}

	return (
		<>
			{featuredMovie && (
				<div className={style.dashboard}>
					<div className={style.image_wrapper}>
						<img
							src={`${THE_MOVIE_DB_IMAGES_BASE_URL_ORIGINAL}${featuredMovie.backdrop_path}`}
							alt={featuredMovie.title}
						/>
					</div>
					<div className={style.dashboard_content}>
						<header className={style.header}>
							<p>
								Original de <span>Liteflix</span>
							</p>
							<div className={style.title_container}>
								<h1>{featuredMovie.title}</h1>
							</div>
							<div className={style.ctas_wrapper}>
								<Button variant='dark' text='Reproducir' icon={<PlayNoCircle />} animateWidth />
								<Button variant='transparent' text='Mi lista' icon={<Plus />} fadeIn />
							</div>
						</header>

						<div className={style.movies_list_wrapper}>
							{popularMovies && popularMovies.length && (
								<MoviesList initialMovies={popularMovies} />
							)}
						</div>
					</div>
				</div>
			)}
		</>
	)
}
export default Dashboard
