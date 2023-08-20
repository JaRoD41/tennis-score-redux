import { useDispatch } from 'react-redux'
import { playPause, resetGame } from '../features/counter'

export default function ActionsButtonRow() {
	// J'utilise le hook useDispatch pour pouvoir dispatcher des actions
	const dispatch = useDispatch()
	// const playing = useSelector((state) => state.counter.playing)

	return (
		<>
			<div className="buttons-row">
				<button className="button" id="reset" onClick={() => dispatch(resetGame())}>
					Remettre à zéro
				</button>
				<button className="button" id="pause" onClick={() => dispatch(playPause())}>
					Pause / Reprendre
				</button>
			</div>
		</>
	)
}
