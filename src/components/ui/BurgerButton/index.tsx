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
			aria-label={`${open ? 'Cerrar menu' : 'Abrir menu'}`}
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
