import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Footer } from './widgets/footer/Footer'
import { Header } from './widgets/header/Header'
import { Homepage } from './pages/homepage/Homepage'

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />

				<Routes>
					<Route path="/" element={<Homepage />} />

					{/* <Route path="/board" element={<Board />} /> */}
					{/* <Route path="/directors" element={<Directors />} /> */}

					{/* <Route path="/suit_generator" element={<SuitGenerator />} /> */}

					{/* <Route path="*" element={<NotFound />} /> */}
				</Routes>

				<Footer />
			</BrowserRouter>
		</>
	)
}

export default App
