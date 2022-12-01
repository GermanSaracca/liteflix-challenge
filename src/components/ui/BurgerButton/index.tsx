import { Dispatch, SetStateAction } from 'react'
import './index.scss'

interface IProps {
	open: boolean
	setOpen: () => void
}

const BurgerButton = ({ open, setOpen }: IProps) => {
	return (
		<button
			className={`hamburger hamburger--elastic ${open ? 'is-active' : ''}`}
			type='button'
			onClick={setOpen}
		>
			<span className='hamburger-box'>
				<span className='hamburger-inner'></span>
			</span>
		</button>
	)
}
export default BurgerButton
