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
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		increment: (state, action) => {
			state.player1 ++
		},
	},
})

console.log('counter :', counter)
export const { increment } = counter.actions
export default counter.reducer
