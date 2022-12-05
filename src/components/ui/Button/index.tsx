import { DetailedHTMLProps, ReactNode, ButtonHTMLAttributes, CSSProperties } from 'react'
import classNames from 'classnames'
import style from './index.module.scss'

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
	variant: 'light' | 'dark' | 'transparent'
	text?: string
	icon?: ReactNode
	animateWidth?: boolean
	fadeIn?: boolean
}

const Button = ({ text, icon, variant, animateWidth, fadeIn, ...rest }: Props) => {
	return (
		<button
			className={classNames(style.button, {
				[style.light_variant]: variant === 'light',
				[style.dark_variant]: variant === 'dark',
				[style.transparent_variant]: variant === 'transparent',
				[style.animate_width]: Boolean(animateWidth),
				[style.fade_in]: Boolean(fadeIn),
			})}
			{...rest}
		>
			{icon && <span>{icon}</span>}
			{text && <span>{text}</span>}
		</button>
	)
}
export default Button
