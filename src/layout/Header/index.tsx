import { useEffect, useState } from 'react'
import useScrollPosition from '@/hooks/useScrollPosition'
import BurgerButton from '@/components/ui/BurgerButton'
import AddMovieButton from '@/components/AddMovieButton'
import NotificationsBell from '@/components/NotificationsBell'
import Menu from './Menu'
import liteflix_logo from '@/assets/media/images/liteflix-logo.svg'
import user_profile from '@/assets/media/images/user-profile.png'
import classNames from 'classnames'
import style from './index.module.scss'

const Header = () => {
	const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
	const scrollPosition = useScrollPosition()

	const toggleMenu = () => {
		setMenuIsOpen(current => !current)
	}

	useEffect(() => {
		if (menuIsOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
	}, [menuIsOpen])

	return (
		<>
			<header
				className={classNames(style.header, { [style.with_background]: scrollPosition > 100 })}
			>
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
			<Menu opened={menuIsOpen} toggleMenu={toggleMenu} />
		</>
	)
}
export default Header
