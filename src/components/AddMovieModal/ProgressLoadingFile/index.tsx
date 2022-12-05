import classNames from 'classnames'
import { useState, useEffect } from 'react'
import style from './index.module.scss'

interface IProps {
	startLoadingSuccesfully: boolean
	errorLoading: boolean
	onCancel: () => void
}

const ProgressLoadingFile = ({ startLoadingSuccesfully, errorLoading, onCancel }: IProps) => {
	const [percentageLoaded, setPercentageLoaded] = useState<number>(0)
	const [isLoading, setIsLoading] = useState<boolean>(false)

	useEffect(() => {
		let loadingInterval: NodeJS.Timer

		if (startLoadingSuccesfully) {
			setIsLoading(true)

			loadingInterval = setInterval(() => {
				setPercentageLoaded(current => {
					if (current !== 100) {
						return current + 1
					} else {
						setIsLoading(false)
						return current
					}
				})
			}, 50)
		}

		return () => {
			clearInterval(loadingInterval)
		}
	}, [startLoadingSuccesfully])

	return (
		<div className={style.progress_loading_file}>
			<div className={style.current_info}>
				{isLoading && percentageLoaded !== 100 && <p>CARGANDO {percentageLoaded}%</p>}
				{errorLoading && <p>¡ERROR! NO SE PUDO CARGAR LA PELÍCULA</p>}
				{startLoadingSuccesfully && percentageLoaded === 100 && <p>100% CARGADO</p>}
			</div>
			<div className={style.progress_bar}>
				<div
					className={classNames(style.progress, {
						[style.error_loading]: errorLoading,
					})}
					style={{ width: `${percentageLoaded}%` }}
				/>
				<div className={style.back_line}></div>
			</div>
			{isLoading && percentageLoaded !== 100 && (
				<button className={style.action_button} onClick={onCancel}>
					Cancelar
				</button>
			)}
			{errorLoading && (
				<button className={style.action_button} onClick={onCancel}>
					Reintentar
				</button>
			)}
			{startLoadingSuccesfully && percentageLoaded === 100 && (
				<p className={style.fully_loaded}>¡LISTO!</p>
			)}
		</div>
	)
}
export default ProgressLoadingFile
