import { useDispatch } from 'react-redux'
// Je récupère l'action increment du reducer counter afin de l'utiliser dans mon composant
import { increment } from '../features/counter'

export default function PlayersButtonRow() {
	// Je récupère la fonction dispatch
	const dispatch = useDispatch()
	console.log('increment :', increment())
	return (
		<>
			<div className="buttons-row">
				<button className="button" id="player-1" onClick={() => dispatch(increment())}>
					Point Joueur 1
				</button>
				<button className="button" id="player-2" onClick={() => dispatch(increment())}>
					Point Joueur 2
				</button>
			</div>
		</>
	)
}
