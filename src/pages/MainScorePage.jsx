import ActionsButtonRow from '../components/ActionsButtonRow'
import PlayersButtonRow from '../components/PlayersButtonRow'
import ScoreDisplay from '../components/ScoreDisplay'
import logo from '../assets/logoTS.webp'
import { useSelector } from 'react-redux'

export default function MainScorePage() {
	let display = ''
	// Je recupere la valeur des points des joueurs dans le store grace a useSelector
	const player1Score = useSelector((state) => state.counter.player1)
	const player2Score = useSelector((state) => state.counter.player2)

	// Je recupere l'état du jeu dans le store grace a useSelector
	const displayState = useSelector((state) => state.counter.playing)
	if (displayState === true) {
		display = `Le score est : ${player1Score} - ${player2Score}`
	} else {
		display = 'Le jeu est en pause'
	}

	return (
		<>
			<img src={logo} className="logo" alt="logo" />
			<ScoreDisplay display={display} />
			<div className="buttons">
				<PlayersButtonRow />
				<ActionsButtonRow />
			</div>
		</>
	)
}
