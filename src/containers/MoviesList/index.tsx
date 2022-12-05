import { useState } from 'react'
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

	const handleSetOption = (option: OptionType) => {
		console.log(option)

		setSelectedOption(option)
	}

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
					: ['traer', 'del', 'localStorage'].map(movie => (
							<div className={style.movie} key={movie}>
								<MovieCard movie={initialMovies[0]} />
							</div>
					  ))}
			</div>
		</div>
	)
}
export default MoviesList
