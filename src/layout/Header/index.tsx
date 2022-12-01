import { useState } from 'react'
import BurgerButton from '@/components/ui/BurgerButton'
import { Bell, Arrow, Clip, Play, Star, PlayNoCircle, Plus, Checked } from '@/components/ui/Icons'
import style from './index.module.scss'
import Button from '@/components/ui/Button'

const Header = () => {
	const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

	return (
		<header className={style.header}>
			<h2>Header</h2>
			<BurgerButton open={menuIsOpen} setOpen={() => setMenuIsOpen(current => !current)} />
			{menuIsOpen ? <p>Menu abierto</p> : <p>Menu cerrado</p>}
			<div>
				<Bell width={30} height={30} />
				<Arrow width={30} height={30} />
				<Clip width={30} height={30} />
				<Play width={30} height={30} />
				<Star width={30} height={30} />
				<PlayNoCircle width={30} height={30} />
				<Plus width={30} height={30} />
				<Checked width={30} height={30} />
			</div>

			<Button variant='light' disabled>
				Hola
			</Button>
		</header>
	)
}
export default Header
