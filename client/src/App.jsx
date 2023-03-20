import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './components/Home'
import Destination from './components/Destination'
import Crew from './components/Crew'
import Technology from './components/Technology'

function App() {
    const [selectedRoute, setSelectedRoute] = useState('home')

	return (
		<div className={`app ${selectedRoute}`}>
			<Navbar setSelectedRoute={setSelectedRoute}/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/destination" element={<Destination />} />
				<Route path="/crew" element={<Crew />} />
				<Route path="/technology" element={<Technology />} />
			</Routes>
		</div>
	)
}

export default App
