import { useDispatch, useSelector } from 'react-redux'
import { playPause } from '../features/counter'

export default function ActionsButtonRow() {
	// J'utilise le hook useDispatch pour pouvoir dispatcher des actions
	const dispatch = useDispatch()
	const playing = useSelector((state) => state.counter.playing)
	console.log('État actuel du jeu :', playing)
	return (
		<>
			<div className="buttons-row">
				<button className="button" id="reset">
					Remettre à zéro
				</button>
				<button className="button" id="pause" onClick={() => dispatch(playPause())}>
					Pause / Reprendre
				</button>
			</div>
		</>
	)
}
