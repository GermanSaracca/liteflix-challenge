import { useState, ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import AddMovieModal from '../AddMovieModal'
import { Plus } from '../ui/Icons'
import style from './index.module.scss'

const AddMovieButton = (
	props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
) => {
	const [showModal, setShowModal] = useState<boolean>(false)

	const toggleModal = () => {
		setShowModal(current => !current)
	}

	return (
		<>
			<button className={style.add_movie_button} onClick={toggleModal} {...props}>
				<Plus width={14} height={14} />
				Agregar película
			</button>
			<AddMovieModal isOpen={showModal} onClose={toggleModal} />
		</>
	)
}
export default AddMovieButton
