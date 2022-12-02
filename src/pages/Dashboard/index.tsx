import { useEffect, useState } from 'react'
import { getNowPlayingMovies, THE_MOVIE_DB_IMAGES_BASE_URL } from '@/services'
import { Movie } from '@/types'
import style from './index.module.scss'
import Button from '@/components/ui/Button'
import { PlayNoCircle, Plus } from '@/components/ui/Icons'

const Dashboard = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [error, setError] = useState<boolean>(false)
	const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null)

	useEffect(() => {
		const getMovie = async () => {
			setIsLoading(true)

			try {
				const { data } = await getNowPlayingMovies()
				const { results } = data
				const movie = results[0]

				setFeaturedMovie(movie)

				// console.log(`${THE_MOVIE_DB_IMAGES_BASE_URL}${movie.backdrop_path}`)
				// console.log(`${THE_MOVIE_DB_IMAGES_BASE_URL}${movie.poster_path}`)
			} catch (e) {
				setError(true)
				console.error(e)
			} finally {
				setIsLoading(false)
			}
		}
		getMovie()
	}, [])

	if (isLoading) {
		return <div>Some fullscreen loader...</div>
	}

	if (error) {
		return <div>Some error fullscreen</div>
	}

	return (
		<>
			{featuredMovie && (
				<div className={style.dashboard}>
					<div className={style.image_wrapper}>
						<img
							src={`${THE_MOVIE_DB_IMAGES_BASE_URL}${featuredMovie.backdrop_path}`}
							alt={featuredMovie.title}
						/>
					</div>
					<div className={style.dashboard_content}>
						<header>
							<p>
								Original de <span>Liteflix</span>
							</p>
							<h1>{featuredMovie.title}</h1>
						</header>
						<div className={style.ctas_wrapper}>
							<Button variant='dark' text='Reproducir' icon={<PlayNoCircle />} />
							<Button variant='transparent' text='Mi lista' icon={<Plus />} />
							<Button variant='light' text='Reproducir' icon={<PlayNoCircle />} />
						</div>
					</div>
				</div>
			)}
		</>
	)
}
export default Dashboard