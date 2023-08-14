import { useDispatch } from 'react-redux'
// Je récupère l'action increment du reducer counter afin de l'utiliser dans mon composant
import { player1Scored, player2Scored } from '../features/counter'

export default function PlayersButtonRow() {
	// Je récupère la fonction dispatch
	const dispatch = useDispatch()
	return (
		<>
			<div className="buttons-row">
				<button className="button" id="player-1" onClick={() => dispatch(player1Scored())}>
					Point Joueur 1
				</button>
				<button className="button" id="player-2" onClick={() => dispatch(player2Scored())}>
					Point Joueur 2
				</button>
			</div>
		</>
	)
}
