import { useState, DetailedHTMLProps, ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'
import { Bell } from '../ui/Icons'
import style from './index.module.scss'

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const NotificationsBell = (props: Props) => {
	// Aca podriamos acceder al store de redux o a un context y estar observar si el usuario tiene notificaciones
	const [hasNotifications] = useState<boolean>(true)

	return (
		<button
			className={classNames(style.notifications_bell, {
				[style.has_notifications]: hasNotifications,
			})}
			aria-label='Notificaciones'
			{...props}
		>
			<Bell width={26} height={26} />
		</button>
	)
}
export default NotificationsBell
