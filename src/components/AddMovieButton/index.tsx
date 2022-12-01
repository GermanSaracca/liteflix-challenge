import { Plus } from '../ui/Icons'
import style from './index.module.scss'

const AddMovieButton = () => {
	return (
		<button className={style.add_movie_button}>
			<Plus width={16} heigth={16} />
			Agregar película
		</button>
	)
}
export default AddMovieButton
