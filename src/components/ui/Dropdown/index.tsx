import { useState } from 'react'
import classNames from 'classnames'
import { Arrow, Checked } from '../Icons'
import style from './index.module.scss'

export interface OptionType {
	text: string
	value: string
}

interface IProps {
	options: OptionType[]
	selectedOption: OptionType
	setOption: (value: OptionType) => void
}

const DropDown = ({ options, selectedOption, setOption }: IProps) => {
	const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

	const handleSelection = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const target = event.target as HTMLButtonElement

		const option: OptionType = {
			text: target.textContent as string,
			value: target.value,
		}

		setOption(option)
		toggleMenu()
	}

	const toggleMenu = () => {
		setMenuIsOpen(current => !current)
	}

	return (
		<div className={style.dropdown}>
			<header className={style.header}>
				<button onClick={toggleMenu}>
					Ver:<span>{selectedOption?.text}</span>
					<Arrow width={12} />
				</button>
			</header>
			<div className={classNames(style.menu, { [style.menu_is_open]: menuIsOpen })}>
				{options.map(option => (
					<button
						onClick={handleSelection}
						value={option.value}
						disabled={option.value === selectedOption.value}
						key={option.value}
					>
						{option.text}
						{selectedOption.value === option.value && (
							<span>
								<Checked />
							</span>
						)}
					</button>
				))}
			</div>
		</div>
	)
}
export default DropDown
