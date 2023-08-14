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

// const initialState = {
//   value: 0,
// }

export const counter = createSlice({
	name: 'counter',
	initialState,
	// Les reducers sont des fonctions qui vont modifier le state
	reducers: {
		playPause: (state) => {
      state.playing = !state.playing
    },
		playerScored: (state, action) => {
			state[action.payload.player]++
		},
	},
})

console.log('counter :', counter)
export const { playerScored, playPause } = counter.actions
export default counter.reducer
