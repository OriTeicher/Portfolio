import { useState } from 'react'

export default function NavList() {
     const [isMenuOpen, setIsMenuOpen] = useState(false)

     const toggleMenu = () => {
          setIsMenuOpen(!isMenuOpen)
     }

     return (
          <div className={`nav-container flex ${isMenuOpen ? 'open' : ''}`}>
               <button className="menu-button" onClick={toggleMenu}>
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
               </button>
               <ul className="nav-options-container flex">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Skills & Hobbies</li>
                    <li>Contact</li>
               </ul>
          </div>
     )
}
