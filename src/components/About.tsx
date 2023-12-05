import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import LogosGrid from './LogosGrid'

interface IndexProps {
     selectedCharacter: string
}

export default function About(props: IndexProps) {
     const [isShown, setIsShown] = useState(false)
     const controls = useAnimation()

     useEffect(() => {
          window.addEventListener('scroll', () => {
               setIsShown(window.scrollY > 50)
          })
     }, [])

     return (
          <>
               {isShown && (
                    <section className="about-container flex space-evenly row">
                         <motion.div
                              className="about-details-container flex align-center space-evenly"
                              transition={{ duration: 1.8 }}
                              initial={{ y: 0, opacity: 0, x: -2000, borderRadius: 1000 }}
                              animate={{ opacity: 1, x: 0, borderRadius: 0 }}
                         >
                              <motion.img src={props.selectedCharacter} className="about-img" animate={controls} />
                              <div className="details-container flex column">
                                   <h2>Nice to meet ya!</h2>
                                   <div className="flex column justify-center ">
                                        <p>Im Ori, from Kfar Sava Israel</p>
                                        <p>Full-Stacking / Front-Ending for a living</p>
                                        <p>and also a big Tottenham Hotspurs fan 🤍</p>
                                   </div>
                              </div>
                         </motion.div>

                         <motion.section
                              className="flex column align-center justify-center skills-container"
                              transition={{ duration: 1.8 }}
                              initial={{ y: 0, opacity: 0, x: 2000, borderRadius: 1000 }}
                              animate={{ opacity: 1, x: 0, borderRadius: 0 }}
                         >
                              <div className="flex">
                                   <h1>My Stack </h1>
                              </div>
                              <LogosGrid />
                         </motion.section>
                    </section>
               )}
          </>
     )
}
