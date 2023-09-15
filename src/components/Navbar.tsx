import ContactIcons from './ContactIcons'
import NavList from './NavList'

export default function Navbar() {
    return (
        <section className="navbar-container flex align-center justify-center space-evenly">
            <h3 className="logo">
                Ori<span>Dev</span>
            </h3>
            <NavList />
            <ContactIcons />
        </section>
    )
}
