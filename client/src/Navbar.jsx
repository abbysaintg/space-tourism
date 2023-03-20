import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/shared/logo.svg'
import iconHamburger from './assets/shared/icon-hamburger.svg'
import iconClose from './assets/shared/icon-close.svg'

function Navbar({ setSelectedRoute }) {
	const [isVisible, setIsVisible] = useState(false)
    const [currentPage, setCurrentPage] = useState("home")

	const handleToggleClick = () => {
		setIsVisible(!isVisible)
	}

    const handleLinkClick = (page) => {
		setSelectedRoute(page)
        setCurrentPage(page)
	}

    function isLinkSelected(page) {
        return page === currentPage
    }

	return (
		<header className="primary-header flex">
			<div>
				<img src={logo} alt="space-tourism-logo" className="logo" />
			</div>
			<button className="mobile-nav-toggle" aria-controls="primary-navigation" onClick={handleToggleClick}>
				<span className="sr-only">
					Show/Hide Menu
				</span>
				<img src={isVisible ? iconClose : iconHamburger} alt={isVisible ? 'Close Menu' : 'Open Menu'}/>
			</button>
			<nav>
				<ul id="primary-navigation" className={`${isVisible ? 'menu-visible' : 'menu-not-visible'} primary-navigation underline-indicators flex`}>
					<Link to="/" aria-selected={isLinkSelected('home')} className="uppercase text-white letter-spacing-2" onClick={() => handleLinkClick('home')}>
						<span aria-hidden="true">00</span>Home
					</Link>
					<Link to="/destination" aria-selected={isLinkSelected('destination')} className="uppercase text-white letter-spacing-2" onClick={() => handleLinkClick('destination')}>
						<span aria-hidden="true">01</span>Destination
					</Link>
					<Link to="/crew" aria-selected={isLinkSelected('crew')} className="uppercase text-white letter-spacing-2" onClick={() => handleLinkClick('crew')}>
						<span aria-hidden="true">02</span>Crew
					</Link>
					<Link to="/technology" aria-selected={isLinkSelected('technology')} className="uppercase text-white letter-spacing-2" onClick={() => handleLinkClick('technology')}>
						<span aria-hidden="true">03</span>Technology
					</Link>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
