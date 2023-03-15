import { Route, Routes } from 'react-router-dom'
import data from './assets/data.json'
import Navbar from './Navbar'
import Home from './Home'
import Commander from './crew/Commander'
import Engineer from './crew/Engineer'
import Pilot from './crew/Pilot'
import Specialist from './crew/Specialist'
import Europa from './destination/Europa'
import Mars from './destination/Mars'
import Moon from './destination/Moon'
import Titan from './destination/Titan'
import Spaceport from './technology/Spaceport'
import Capsule from './technology/Capsule'
import Vehicle from './technology/Vehicle'

function App() {
	return (
		<div className='app home'>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/commander" element={<Commander />} />
				<Route path="/engineer" element={<Engineer />} />
				<Route path="/pilot" element={<Pilot />} />
				<Route path="/specialist" element={<Specialist />} />
				<Route path="/europa" element={<Europa />} />
				<Route path="/mars" element={<Mars />} />
				<Route path="/moon" element={<Moon />} />
				<Route path="/titan" element={<Titan />} />
				<Route path="/spaceport" element={<Spaceport />} />
				<Route path="/capsule" element={<Capsule />} />
				<Route path="/vehicle" element={<Vehicle />} />
			</Routes>
		</div>
	)
}

export default App
