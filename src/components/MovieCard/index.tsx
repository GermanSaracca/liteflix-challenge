import style from './index.module.scss'

const MovieCard = () => {
	return (
		<div
			style={{
				border: 'solid 1px red',
				padding: '1rem',
				background: 'white',
				maxHeight: '146px',
				overflow: 'hidden',
			}}
		>
			<h2>MovieCard</h2>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit cumque accusantium
				voluptas sunt neque maiores iste quod nam temporibus eaque.
			</p>
		</div>
	)
}
export default MovieCard
