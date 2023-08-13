import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import MainScorePage from './pages/MainScorePage'
import store from './app/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		<MainScorePage />
	</Provider>
)
