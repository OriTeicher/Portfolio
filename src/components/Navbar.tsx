import ContactIcons from "./ContactIcons"
import NavList from "./NavList"

export default function Navbar() {
  return (
    <section className="navbar-container">
      <h3 className="logo">OriDev.</h3>
      <NavList />
      <ContactIcons />
    </section>
  )
}
