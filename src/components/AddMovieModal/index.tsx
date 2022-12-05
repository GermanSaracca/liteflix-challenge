import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Button from '../ui/Button'
import Modal from '../ui/Modal'
import DropFileZone from '../ui/DropFileZone'
import style from './index.module.scss'
import ProgressLoadingFile from './ProgressLoadingFile'
import { Movie } from '@/types'

interface IProps {
	isOpen: boolean
	onClose: () => void
}

type FormInputs = {
	imageFile: FileList
	title: string
}

interface ProgressBarState {
	show: boolean
	success: boolean
	fail: boolean
}

const AddMovieModal = ({ isOpen, onClose }: IProps) => {
	const [showProgressBar, setShowProgressBar] = useState<ProgressBarState>({
		show: false,
		success: false,
		fail: false,
	})

	const {
		register,
		handleSubmit,
		setValue,
		reset,
		formState: { errors, isValid, isDirty },
	} = useForm<FormInputs>()

	const onSubmit: SubmitHandler<FormInputs> = async data => {
		const { imageFile, title } = data

		console.log({ imageFile, title })

		const objectUrl = URL.createObjectURL(imageFile[0])

		const newMovie: Movie = {
			poster_path: objectUrl,
			title,
		}
		const moviesInStorage = window.localStorage.getItem('movies')

		// Parse stored json or if none return initialValue

		if (moviesInStorage) {
			const actualMovies = JSON.parse(moviesInStorage)
			localStorage.setItem('movies', JSON.stringify([...actualMovies, newMovie]))
			reset()
			setShowProgressBar({ show: false, success: false, fail: false })
		} else {
			localStorage.setItem('movies', JSON.stringify([newMovie]))
			reset()
			setShowProgressBar({ show: false, success: false, fail: false })
		}

		// setLoading(true);

		try {
		} catch (e) {
			console.error(e)
		} finally {
			// setLoading(false);
		}
	}

	const handleDropAccepted = (value: FileList) => {
		setValue('imageFile', value, { shouldValidate: true, shouldDirty: true })
		setShowProgressBar({ show: true, success: true, fail: false })
	}

	const handleDropRejected = () => {
		setShowProgressBar({ show: true, success: false, fail: true })
	}

	const handleCancelAnimationProgress = () => {
		setShowProgressBar({ show: false, success: false, fail: false })
	}

	const handleClose = () => {
		onClose()
		handleCancelAnimationProgress()
	}

	return (
		<Modal isOpen={isOpen} onRequestClose={handleClose} headerTitle='Agregar Película'>
			<div className={style.main_wrapper}>
				<form onSubmit={handleSubmit(onSubmit)} className={style.form}>
					{/* FILE INPUT */}
					<div className={style.input_file_container}>
						{showProgressBar.show ? (
							<ProgressLoadingFile
								startLoadingSuccesfully={showProgressBar.show && showProgressBar.success}
								errorLoading={showProgressBar.show && showProgressBar.fail}
								onCancel={handleCancelAnimationProgress}
							/>
						) : (
							<DropFileZone
								onDropAccepted={handleDropAccepted}
								onDropRejected={handleDropRejected}
							/>
						)}

						<input type='hidden' id='file' {...register('imageFile', { required: true })} />
						{errors.imageFile && (
							<span className={style.required_span}>Por favor suba una imagen</span>
						)}
					</div>

					{/* NAME INPUT */}
					<div className={style.input_name_container}>
						<input
							type='text'
							placeholder='Título'
							autoComplete='off'
							{...register('title', { required: true })}
						/>
						{errors.title && (
							<span className={style.required_span}>Por favor ingrese un título</span>
						)}
					</div>

					{/* SUBMIT BUTTON */}
					<div className={style.buttons_container}>
						<Button type='submit' variant='light' text='Subir película' disabled={!isValid} />
						<Button type='button' variant='transparent' text='Salir' />
					</div>
				</form>
			</div>
		</Modal>
	)
}
export default AddMovieModal
