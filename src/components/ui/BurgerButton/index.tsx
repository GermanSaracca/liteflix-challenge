import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'
import './index.scss'

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
	open: boolean
	setOpen: () => void
}

const BurgerButton = ({ open, setOpen, ...rest }: Props) => {
	return (
		<button
			className={`hamburger hamburger--elastic ${open ? 'is-active' : ''}`}
			type='button'
			onClick={setOpen}
			aria-label={`${open ? 'Cerrar menu' : 'Abrir menu'}`}
			{...rest}
		>
			<span className='hamburger-box'>
				<span className='hamburger-inner'></span>
			</span>
		</button>
	)
}
export default BurgerButton

/*
** Usage
	<Button variant='light'>I´m the Liteflix button</Button>
*/
