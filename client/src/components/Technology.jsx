import { useState } from 'react'
import data from '../assets/data.json'

function Technology() {
	const [selectedTech, setSelectedTech] = useState('Launch vehicle')

	const techData = data.technology.find((tech) => tech.name === selectedTech)

	const handleTechClick = (event) => {
		const techName = event.target.innerText
		setSelectedTech(techName)
	}

	return (
		<main className='grid-container grid-container--technology'>
			<div>
				<ul>
					<li onClick={handleTechClick}>Launch vehicle</li>
					<li onClick={handleTechClick}>Spaceport</li>
					<li onClick={handleTechClick}>Space capsule</li>
				</ul>
			</div>
			<div>
				<h2>{selectedTech}</h2>
				{/* <img src={techData.images.png} alt={selectedTech} /> */}
				<p>Description: {techData.description}</p>
			</div>
		</main>
	)
}

export default Technology
