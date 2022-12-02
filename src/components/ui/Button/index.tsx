import { DetailedHTMLProps, ReactNode, ButtonHTMLAttributes, CSSProperties } from 'react'
import classNames from 'classnames'
import style from './index.module.scss'

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
	children?: ReactNode
	variant: 'light' | 'dark' | 'transparent'
	styles?: CSSProperties // TODO : mix this styles with actual styles
	text?: string
	icon?: ReactNode
}

/*
	This button can act as a button or can be wrapped by an anchor tag or react router link component.
*/

const Button = ({ children, text, icon, variant, styles, ...rest }: Props) => {
	return (
		<button
			className={classNames(style.button, {
				[style.light_variant]: variant === 'light',
				[style.dark_variant]: variant === 'dark',
				[style.transparent_variant]: variant === 'transparent',
			})}
			style={{ ...styles }}
			{...rest}
		>
			{icon && <span>{icon}</span>}
			{text && <span>{text}</span>}
		</button>
	)
}
export default Button
