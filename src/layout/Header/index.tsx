import { useRef, useState } from 'react'
import BurgerButton from '@/components/ui/BurgerButton'
import AddMovieButton from '@/components/AddMovieButton'
import NotificationsBell from '@/components/NotificationsBell'
import liteflix_logo from '@/assets/media/images/liteflix-logo.svg'
import user_profile from '@/assets/media/images/user-profile.png'
import classNames from 'classnames'
import style from './index.module.scss'
import Menu from './Menu'

const Header = () => {
	const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
	const headerRef = useRef<HTMLElement>(null)

	const toggleMenu = () => {
		setMenuIsOpen(current => !current)
	}

	// TODO: Aplicar background primary al header cuando se scrolleo un poco, mas que nada mobile

	return (
		<>
			<header className={style.header} ref={headerRef}>
				<div className={style.header_container}>
					<div className={classNames(style.burger_wrapper, { [style.low_opacity]: menuIsOpen })}>
						<BurgerButton open={menuIsOpen} setOpen={toggleMenu} />
					</div>
					<div className={style.add_movie_wrapper}>
						<AddMovieButton />
					</div>

					<div className={style.notifications_wrapper}>
						<NotificationsBell />
					</div>
					<img src={liteflix_logo} alt='Liteflix' className={style.liteflix_logo} />
					<img src={user_profile} alt='User settings' className={style.user_profile} />
				</div>
			</header>
			<Menu
				opened={menuIsOpen}
				toggleMenu={toggleMenu}
				headerHeight={headerRef.current?.clientHeight}
			/>
		</>
	)
}
export default Header
