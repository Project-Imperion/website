import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Footer } from './widgets/footer/Footer'
import { Groups } from './pages/groups/Groups'
import { Header } from './widgets/header/Header'
import { Homepage } from './pages/homepage/Homepage'

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />

				<Routes>
					<Route path="/" element={<Homepage />} />

					<Route path="/groups" element={<Groups />} />


					{/* <Route path="*" element={<NotFound />} /> */}
				</Routes>

				<Footer />
			</BrowserRouter>
		</>
	)
}

export default App
