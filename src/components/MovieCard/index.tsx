import { THE_MOVIE_DB_IMAGES_BASE_URL_W_400 } from '@/services'
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

				<h2>{movie.title}</h2>
			</div>
			{movie.vote_average && (
				<div className={style.onhover_content}>
					<div className={style.rating}>
						<Star />
						<span>{movie.vote_average}</span>
					</div>
					<time dateTime={`${movie.release_date}`}>
						{movie.release_date && new Date(movie.release_date).getFullYear().toString()}
					</time>
				</div>
			)}
			{movie.backdrop_path ? (
				<img
					src={`${THE_MOVIE_DB_IMAGES_BASE_URL_W_400}${movie.backdrop_path}`}
					alt={movie.title}
				/>
			) : (
				<img src={`${movie.image}`} alt={movie.title} />
			)}
		</div>
	)
}
export default MovieCard
