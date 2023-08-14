import { useSelector } from 'react-redux'

export default function ScoreDisplay() {
	const player1Score = useSelector((state) => state.counter.player1)
	const player2Score = useSelector((state) => state.counter.player2)
	return (
		<>
			<p className="display" id="score">
				Le score est : {player1Score} - {player2Score}
			</p>
		</>
	)
}
