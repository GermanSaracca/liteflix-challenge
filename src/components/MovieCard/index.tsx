import { Movie } from '@/types'
import { Play, Star } from '../ui/Icons'
import style from './index.module.scss'

interface IProps {
	movie: Movie
}

const MovieCard = ({ movie }: IProps) => {
	return (
		<div className={style.movie_card}>
			<div className={style.initial_content}>
				<button className={style.play_button} aria-label='Play movie'>
					<Play width={'100%'} height={'100%'} />
				</button>
				<div className={style.title_container}>
					<h2>{movie.title}</h2>
				</div>
			</div>

			<div className={style.onhover_content}>
				<div className={style.rating}>
					<Star />
					{movie.vote_average}
				</div>
			</div>
		</div>
	)
}
export default MovieCard
