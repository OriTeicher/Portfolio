import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ContactIcons from './ContactIcons'
import NavList from './NavList'
import Logo from './Logo'

export default function Navbar() {
     const [isScroll, setIsScroll] = useState(false)

     useEffect(() => {
          window.addEventListener('scroll', () => {
               setIsScroll(window.scrollY > 20)
          })
     }, [])
     return (
          <motion.section className={`navbar-container flex show align-center ${isScroll ? 'scroll' : ''}`}>
               <Logo />
               <NavList />
               <ContactIcons />
          </motion.section>
     )
}
