// Je récupère le hook useDispatch qui me permettra de dispatcher mes actions
import { useDispatch } from 'react-redux'
// Je récupère les actions du reducer counter afin de les utiliser dans mon composant
import { playerScored } from '../features/counter'

export default function PlayersButtonRow() {
	// Je récupère la fonction dispatch
	const dispatch = useDispatch()

	const handleButtonClick = (event) => {
		const player = event.target.id === 'player-1' ? 'player1' : 'player2'
		dispatch(playerScored({ player }))
	}

	return (
		<>
			<div className="buttons-row">
				<button className="button" id="player-1" onClick={handleButtonClick}>
					Point Joueur 1
				</button>
				<button className="button" id="player-2" onClick={handleButtonClick}>
					Point Joueur 2
				</button>
			</div>
		</>
	)
}
