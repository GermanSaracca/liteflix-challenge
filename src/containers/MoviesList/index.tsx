import { useEffect, useState } from 'react'
import MovieCard from '@/components/MovieCard'
import DropDown, { OptionType } from '@/components/ui/Dropdown'
import { getPopularsMovies, THE_MOVIE_DB_IMAGES_BASE_URL } from '@/services'
import { Movie } from '@/types'
import Skeleton from 'react-loading-skeleton'
import style from './index.module.scss'

const dropdownOptions: OptionType[] = [
	{ text: 'Mis películas', value: 'Mis películas' },
	{ text: 'Populares', value: 'Populares' },
]

const MoviesList = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [error, setError] = useState<boolean>(false)
	const [popularMovies, setPopularMovies] = useState<Movie[] | null>(null)
	const [selectedOption, setSelectedOption] = useState<OptionType>(dropdownOptions[0])

	useEffect(() => {
		const fetchPopularsMovies = async () => {
			setIsLoading(true)

			try {
				const { data } = await getPopularsMovies()
				const { results } = data

				// Hago un slice para evitar mostar en populares la pelicula de la portada
				// En ambos endpoints viene primera

				setPopularMovies(results.slice(1, 5))
			} catch (e) {
				setError(true)
				console.error(e)
			} finally {
				setIsLoading(false)
			}
		}
		fetchPopularsMovies()
	}, [])

	const handleSetOption = (option: OptionType) => {
		console.log(option)
		setSelectedOption(option)
	}
	if (error) {
		return null
	}
	// TODO Skeletons para el loading ?

	return (
		<div className={style.movies_list}>
			<div className={style.drop_down_wrapper}>
				<DropDown
					options={dropdownOptions}
					setOption={handleSetOption}
					selectedOption={selectedOption}
				/>
			</div>
			<div className={style.movies_container}>
				<Skeleton count={4} />
				{/* {isLoading || !popularMovies ? (
					<Skeleton count={4} />
				) : (
					popularMovies.map(movie => <MovieCard />)
				)} */}
			</div>
		</div>
	)
}
export default MoviesList
