import { Link } from 'react-router-dom'
import logo from './assets/shared/logo.svg'

function Navbar() {
	return (
		<header className="primary-header flex">
			<div>
				<img src={logo} alt="space-tourism-logo" className="logo" />
			</div>
			<button class="mobile-nav-toggle" aria-controls="primary-navigation">
				<span class="sr-only" aria-expanded="false">
					Menu
				</span>
			</button>
			<nav>
				<ul id="primary-navigation" className="primary-navigation underline-indicators flex">
					<Link to="/" className="nav-link uppercase text-white letter-spacing-2">
						<span>00</span>Home
					</Link>
					<Link to="/commander" className="nav-link uppercase text-white letter-spacing-2">
						<span>01</span>Destination
					</Link>
					<Link to="/europa" className="nav-link uppercase text-white letter-spacing-2">
						<span>02</span>Crew
					</Link>
					<Link to="/spaceport" className="nav-link uppercase text-white letter-spacing-2">
						<span>03</span>Technology
					</Link>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
