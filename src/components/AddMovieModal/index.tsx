import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { getMoviesFromLocalStorage } from '@/services'
import Button from '../ui/Button'
import Modal from '../ui/Modal'
import DropFileZone from '../ui/DropFileZone'
import ProgressLoadingFile from './ProgressLoadingFile'
import { Movie } from '@/types'
import style from './index.module.scss'

interface IProps {
	isOpen: boolean
	onClose: () => void
}

type FormInputs = {
	imageFile: File | null
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
	const [uploadSuccess, setUploadSuccess] = useState<boolean>(false)

	const {
		register,
		handleSubmit,
		setValue,
		reset,
		watch,
		formState: { errors, isValid },
	} = useForm<FormInputs>()

	const onSubmit: SubmitHandler<FormInputs> = async data => {
		const { imageFile, title } = data

		try {
			const reader = new FileReader()

			if (imageFile) {
				reader.readAsDataURL(imageFile)

				reader.addEventListener('load', () => {
					const newMovie: Movie = {
						title,
						image: reader.result as string,
						id: new Date().toString(),
					}

					const moviesInStorage: string = getMoviesFromLocalStorage()

					if (moviesInStorage) {
						localStorage.setItem('movies', JSON.stringify([...moviesInStorage, newMovie]))
					} else {
						localStorage.setItem('movies', JSON.stringify([newMovie]))
					}

					setUploadSuccess(true)
					handleCancelAnimationProgress()
				})
			}
		} catch (e) {
			console.error(e)
		}
	}

	const handleDropAccepted = (value: File) => {
		setValue('imageFile', value, { shouldValidate: true, shouldDirty: true })
		setShowProgressBar({ show: true, success: true, fail: false })
	}

	const handleDropRejected = () => {
		setShowProgressBar({ show: true, success: false, fail: true })
	}

	const handleCancelAnimationProgress = () => {
		setShowProgressBar({ show: false, success: false, fail: false })
		setValue('imageFile', null, { shouldValidate: false, shouldDirty: false })
	}

	const handleClose = () => {
		onClose()
		handleCancelAnimationProgress()
		setUploadSuccess(false)
		reset()
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={handleClose}
			headerTitle={!uploadSuccess ? 'Agregar Película' : ''}
		>
			<div className={style.main_wrapper}>
				{uploadSuccess ? (
					<div className={style.success_container}>
						<div className={style.success_message}>
							<p>¡Felicitaciones!</p>
							<p>{`${watch('title')} fue correctamente subida`}</p>
						</div>

						<Button type='button' variant='light' text='Ir a Home' onClick={handleClose} />
					</div>
				) : (
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
							<Button type='button' variant='transparent' text='Salir' onClick={handleClose} />
						</div>
					</form>
				)}
			</div>
		</Modal>
	)
}
export default AddMovieModal
