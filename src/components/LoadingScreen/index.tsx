import { useState, AnimationEvent } from 'react'
import classNames from 'classnames'
import style from './index.module.scss'

// Con la prop presentation en true, no mostrara la animacion de pulso que es más para estados de loading

interface IProps {
	presentation?: boolean
}
const LoadingScreen = ({ presentation }: IProps) => {
	const [hide, setHide] = useState<boolean>(false)

	if (hide) {
		return null
	}

	return (
		<div
			className={classNames(style.loading_screen, {
				[style.presentation]: presentation,
			})}
			data-animation='presentation-animation'
			onAnimationEnd={(event: AnimationEvent<HTMLDivElement>) => {
				if (presentation && !event.nativeEvent.animationName.includes('span')) {
					setHide(true)
				}
			}}
		>
			<div className={style.letter_container}>
				<span></span>
				<span></span>
			</div>
		</div>
	)
}
export default LoadingScreen
