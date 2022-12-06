import { useEffect, useState } from 'react'
import { getMoviesFromLocalStorage } from '@/services'
import MovieCard from '@/components/MovieCard'
import DropDown, { OptionType } from '@/components/ui/Dropdown'
import { Movie } from '@/types'
import style from './index.module.scss'

const options = {
	my_movies: 'Mis películas',
	popular: 'Populares',
}

const dropdownOptions: OptionType[] = [
	{ text: options['popular'], value: options['popular'] },
	{ text: options['my_movies'], value: options['my_movies'] },
]

interface IProps {
	initialMovies: Movie[]
}

const MoviesList = ({ initialMovies }: IProps) => {
	const [selectedOption, setSelectedOption] = useState<OptionType>(dropdownOptions[0])
	const [moviesInStorage, setMoviesInStorage] = useState<Movie[] | []>(getMoviesFromLocalStorage())

	// Podria haber creado un store de redux o context para informar que se agrego una pelicula y actualizar la lista.
	// Lo evite para no complejizar tanto el codigo

	const handleSetOption = (option: OptionType) => {
		setSelectedOption(option)
	}
	useEffect(() => {
		if (selectedOption.value === options.my_movies) {
			setMoviesInStorage(getMoviesFromLocalStorage())
		}
	}, [selectedOption])

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
				{selectedOption.value === options['popular']
					? initialMovies.map(movie => (
							<div className={style.movie} key={movie.id}>
								<MovieCard movie={movie} />
							</div>
					  ))
					: moviesInStorage.map(movie => (
							<div className={style.movie} key={movie.id}>
								<MovieCard movie={movie} />
							</div>
					  ))}
			</div>
		</div>
	)
}
export default MoviesList
