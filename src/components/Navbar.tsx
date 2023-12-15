import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ContactIcons from './ContactIcons'
import NavList from './NavList'
import Logo from './Logo'

export default function Navbar() {
     const [isScroll, setIsScroll] = useState(false)

     useEffect(() => {
          const handleScroll = () => {
               setIsScroll(window.scrollY > 20)
          }
          window.addEventListener('scroll', handleScroll, { passive: false })

          return () => {
               window.removeEventListener('scroll', handleScroll)
          }
     }, [])
     return (
          <motion.section className={`navbar-container flex show align-center ${isScroll ? 'scroll' : ''}`}>
               <Logo />
               <NavList />
               <ContactIcons />
          </motion.section>
     )
}
