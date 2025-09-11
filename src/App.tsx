import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Footer } from './widgets/footer/Footer'
import { Groups } from './pages/groups/Groups'
import { Header } from './widgets/header/Header'
import { Help } from './pages/help/Help'
import { Homepage } from './pages/homepage/Homepage'
import { NotFound } from './pages/notFound/NotFound'

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />

				<Routes>
					<Route path="/" element={<Homepage />} />
					
					<Route path="/groups" element={<Groups />} />
					<Route path="/groups/:id" element={<Groups />} />

					<Route path="/help" element={<Help />} />
					<Route path="/help/:topic" element={<Help />} />
					
					<Route path="*" element={<NotFound />} />
				</Routes>

				<Footer />
			</BrowserRouter>
		</>
	)
}

export default App
