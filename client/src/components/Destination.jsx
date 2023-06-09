import { useState } from 'react'
import data from '../assets/data.json'
import moon from '../assets/destination/image-moon.png'
import mars from '../assets/destination/image-mars.png'
import europa from '../assets/destination/image-europa.png'
import titan from '../assets/destination/image-titan.png'

const imageMap = {
	Moon: moon,
	Mars: mars,
	Europa: europa,
	Titan: titan,
}

function Destination() {
	const [selectedDestination, setSelectedDestination] = useState('Moon')

	const destinationData = data.destinations.find((destination) => destination.name === selectedDestination)

	const handleDestinationClick = (event) => {
		const destinationName = event.target.value
		setSelectedDestination(destinationName)
		const buttons = event.target.parentNode.querySelectorAll('button')
		buttons.forEach((button) => {
			if (button.value === destinationName) {
				button.setAttribute('aria-selected', true)
			} else {
				button.setAttribute('aria-selected', false)
			}
		})
	}

	return (
		<main className="grid-container grid-container--destination flow">
			<h2 className="numbered-title uppercase">
				<span aria-hidden="true">01 </span>Pick your destination
			</h2>
			<img src={imageMap[selectedDestination]} alt={selectedDestination} />
			<div className="tab-list underline-indicators flex">
				<button aria-selected="true" onClick={handleDestinationClick} value="Moon" className="uppercase ff-sans-cond text-accent letter-spacing-2">
					Moon
				</button>
				<button aria-selected="false" onClick={handleDestinationClick} value="Mars" className="uppercase ff-sans-cond text-accent letter-spacing-2">
					Mars
				</button>
				<button aria-selected="false" onClick={handleDestinationClick} value="Europa" className="uppercase ff-sans-cond text-accent letter-spacing-2">
					Europa
				</button>
				<button aria-selected="false" onClick={handleDestinationClick} value="Titan" className="uppercase ff-sans-cond text-accent letter-spacing-2">
					Titan
				</button>
			</div>
			<article className="destination-info flow">
				<h2 className="fs-800 ff-serif uppercase">{selectedDestination}</h2>
				<p className="blurb">{destinationData.description}</p>
				<div className="destination-meta flex">
					<div>
						<h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
						<p className="fs-500 ff-serif uppercase">{destinationData.distance}</p>
					</div>
					<div>
						<h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
						<p className="fs-500 ff-serif uppercase">{destinationData.travel}</p>
					</div>
				</div>
			</article>
		</main>
	)
}

export default Destination
