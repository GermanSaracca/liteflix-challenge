import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { Plus } from '../ui/Icons'
import style from './index.module.scss'

const AddMovieButton = (
	props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
) => {
	return (
		<button className={style.add_movie_button} {...props}>
			<Plus width={16} heigth={16} />
			Agregar película
		</button>
	)
}
export default AddMovieButton
