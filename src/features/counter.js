import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	// Le score de chacun des joueurs
	player1: 0,
	player2: 0,
	// Si il y a 40-40 quel joueur a l'avantage
	// On utilise null si pas d'avantage
	advantage: null,
	// Qui a gagné ?
	// Si la partie est en cours on utilise null
	winner: null,
	// La partie est-elle en cours ?
	playing: true,
}

export const counter = createSlice({
	name: 'counter',
	initialState,
	// Les reducers sont des fonctions qui vont modifier le state
	reducers: {
		// Je crée un reducer qui va changer la valeur de playing pour les pauses
		playPause: (state) => {
			state.playing = !state.playing
		},
		// Je crée un reducer qui va ajouter un point au joueur qui a marqué
		playerScored: (state, action) => {
			state[action.payload.player]++
		},
		// Je crée un reducer qui va remettre à zéro le jeu
		resetGame: (state) => {
			state.player1 = 0
			state.player2 = 0
			state.advantage = null
			state.winner = null
		}
	},
})

console.log('counter :', counter)
// J'exporte les actions du reducer counter afin de les utiliser dans mon composant
export const { playerScored, playPause, resetGame } = counter.actions
export default counter.reducer
