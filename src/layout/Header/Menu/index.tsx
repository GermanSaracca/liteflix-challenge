import AddMovieButton from '@/components/AddMovieButton'
import NotificationsBell from '@/components/NotificationsBell'
import BurgerButton from '@/components/ui/BurgerButton'
import user_profile from '@/assets/media/images/user-profile.png'
import classNames from 'classnames'
import style from './index.module.scss'

interface IProps {
	headerHeight: number | undefined
	opened: boolean
	toggleMenu: () => void
}

const Menu = ({ headerHeight, opened, toggleMenu }: IProps) => {
	return (
		<>
			<div
				className={classNames(style.menu_container, {
					[style.is_opened]: opened,
					[style.is_closed]: !opened,
				})}
				style={{ paddingTop: headerHeight }}
			>
				<header>
					<BurgerButton open={opened} setOpen={toggleMenu} />
					<div className={style.notifications_wrapper}>
						<NotificationsBell />
					</div>
					<img src={user_profile} alt='User settings' className={style.user_profile} />
				</header>
				<ul>
					<li>Inicio</li>
					<li>Series</li>
					<li>Películas</li>
					<li>Agregadas recientemente</li>
					<li>Populares</li>
					<li>Mis películas</li>
					<li>Mi lista</li>
					<li className={style.add_movie}>
						<AddMovieButton tabIndex={!opened ? -1 : 0} />
					</li>
					<li className={style.log_out}>Cerrar sesión</li>
				</ul>
			</div>
			<div
				className={classNames(style.backdrop_menu, {
					[style.is_opened]: opened,
					[style.is_closed]: !opened,
				})}
				onClick={toggleMenu}
			></div>
		</>
	)
}
export default Menu
