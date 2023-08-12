import ActionsButtonRow from '../components/ActionsButtonRow'
import PlayersButtonRow from '../components/PlayersButtonRow'
import ScoreDisplay from '../components/ScoreDisplay'

export default function MainScorePage() {
	return (
		<>
			<ScoreDisplay />
			<div className="buttons">
				<PlayersButtonRow />
				<ActionsButtonRow />
			</div>
		</>
	)
}
