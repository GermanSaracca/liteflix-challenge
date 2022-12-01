import { useRef, useState } from 'react'
import BurgerButton from '@/components/ui/BurgerButton'
import AddMovieButton from '@/components/AddMovieButton'
import liteflix_logo from '@/assets/media/images/liteflix-logo.svg'
import user_profile from '@/assets/media/images/user-profile.png'
import classNames from 'classnames'
import style from './index.module.scss'

const Header = () => {
	const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
	const headerRef = useRef<HTMLElement>(null)

	const toggleMenu = () => {
		setMenuIsOpen(current => !current)
	}

	return (
		<>
			<header className={style.header} ref={headerRef}>
				<div className={style.header_container}>
					<BurgerButton open={menuIsOpen} setOpen={toggleMenu} />
					<img src={liteflix_logo} alt='Liteflix' />

					<img src={user_profile} alt='User settings' className={style.user_profile} />
				</div>
			</header>
			<div
				className={classNames(style.menu_container, {
					[style.is_opened]: menuIsOpen,
					[style.is_closed]: !menuIsOpen,
				})}
				style={{ paddingTop: headerRef?.current?.clientHeight }}
			>
				<ul>
					<li>Inicio</li>
					<li>Series</li>
					<li>Películas</li>
					<li>Agregadas recientemente</li>
					<li>Populares</li>
					<li>Mis películas</li>
					<li>Mi lista</li>
					<li className={style.add_movie}>
						<AddMovieButton />
					</li>
					<li className={style.log_out}>Cerrar sesión</li>
				</ul>
			</div>
			<div
				className={classNames(style.backdrop_menu, {
					[style.is_opened]: menuIsOpen,
					[style.is_closed]: !menuIsOpen,
				})}
				onClick={toggleMenu}
			></div>
		</>
	)
}
export default Header
