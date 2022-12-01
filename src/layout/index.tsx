import { ReactNode } from 'react'
import Header from './Header'
import style from './index.module.scss'

interface Props {
	children: ReactNode
}

const Layout = ({ children }: Props) => {
	return (
		<div className={style.layout_wrapper}>
			<Header />
			<main>{children}</main>
		</div>
	)
}

export default Layout
