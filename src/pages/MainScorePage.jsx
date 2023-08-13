import ActionsButtonRow from '../components/ActionsButtonRow'
import PlayersButtonRow from '../components/PlayersButtonRow'
import ScoreDisplay from '../components/ScoreDisplay'
import logo from '../assets/logo.webp'

export default function MainScorePage() {
	return (
		<>
			<img src={logo} className='logo' alt="logo" />
			<ScoreDisplay />
			<div className="buttons">
				<PlayersButtonRow />
				<ActionsButtonRow />
			</div>
		</>
	)
}
