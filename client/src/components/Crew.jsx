import { useState } from 'react'
import data from '../assets/data.json'
import commander from '../assets/crew/image-douglas-hurley.png'
import specialist from '../assets/crew/image-mark-shuttleworth.png'
import pilot from '../assets/crew/image-victor-glover.png'
import engineer from '../assets/crew/image-anousheh-ansari.png'

const imageMap = {
	"Commander": commander,
	"Mission Specialist": specialist,
	"Pilot": pilot,
	"Flight Engineer": engineer,
}

function Crew() {
	const [selectedCrew, setSelectedCrew] = useState('Commander')

	const crewData = data.crew.find((crew) => crew.role === selectedCrew)

	const handleCrewClick = (crewRole) => {
		setSelectedCrew(crewRole)
	}

	return (
		<main id="main" className="grid-container grid-container--crew flow">
			<h2 className="numbered-title uppercase">
				<span aria-hidden="true">02 </span>Meet your crew
			</h2>
            <div className="dot-indicators flex">
				<button aria-selected="true" className="dot" onClick={() => handleCrewClick('Commander')}>
					<span className="sr-only">Commander</span>
				</button>
				<button aria-selected="false" className="dot" onClick={() => handleCrewClick('Mission Specialist')}>
					<span className="sr-only">Specialist</span>
				</button>
				<button aria-selected="false" className="dot" onClick={() => handleCrewClick('Pilot')}>
					<span className="sr-only">Pilot</span>
				</button>
				<button aria-selected="false" className="dot" onClick={() => handleCrewClick('Flight Engineer')}>
					<span className="sr-only">Engineer</span>
				</button>
			</div>
			<article className="crew-details">
				<header className="flow flow--space-small">
                    <h2 className="fs-600 ff-serif uppercase">{selectedCrew}</h2>
                    <p className="fs-700 uppercase ff-serif">{crewData.name}</p>
                </header>
				<p>{crewData.bio}</p>
			</article>
			<img src={imageMap[selectedCrew]} alt={selectedCrew} />
		</main>
	)
}

export default Crew
