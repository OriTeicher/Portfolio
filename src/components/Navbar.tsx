import { useEffect, useState } from 'react'
import ContactIcons from './ContactIcons'
import NavList from './NavList'

export default function Navbar() {
     const [isAnimationOn, setIsAnimationOn] = useState(true)
     useEffect(() => {
          setTimeout(() => {
               setIsAnimationOn(false)
          }, 700)
     }, [])

     return (
          <section className={`navbar-container flex align-center ${isAnimationOn ? 'hide slide-in-right' : 'show'}`}>
               <h3 className="logo">
                    <span>{'<'}</span>
                    Ori
                    <span>
                         Dev
                         <span />
                    </span>
                    {' /'}
                    <span>{'>'}</span>
               </h3>
               <NavList />
               <ContactIcons />
          </section>
     )
}
