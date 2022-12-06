import { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

export const Arrow = (props: Props) => {
	return (
		<svg
			width='1em'
			height='1em'
			viewBox='0 0 13 8'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			aria-hidden='true'
			{...props}
		>
			<path d='M1 1L6.54557 6.54557L12.0911 1' stroke='currentColor' strokeWidth={2} />
		</svg>
	)
}
