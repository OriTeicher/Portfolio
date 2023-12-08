import { MusicNoteRounded } from '@mui/icons-material'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { constsService } from '../services/consts.service'

interface IndexProps {
     selectedCharacter: string
}

export interface Song {
     title: string
     link: string
     artist: string
}

export default function Hobbies(props: IndexProps) {
     const [isShown, setIsShown] = useState(false)

     useEffect(() => {
          window.addEventListener('scroll', () => {
               setIsShown(window.scrollY > 250)
          })
     }, [])

     return (
          <>
               {isShown && (
                    <section className="hobbies-container flex space-between row">
                         <motion.div
                              className="about-details-container hobbies-details-container flex align-center space-evenly"
                              transition={{ duration: 2.5 }}
                              initial={{ y: 0, opacity: 0, x: -2000, borderRadius: 1000 }}
                              animate={{ opacity: 1, x: 0, borderRadius: 0 }}
                         >
                              <MusicNoteRounded fontSize="large" style={{ width: '200px', height: '200px' }} />
                              <div className="details-container flex column justify-center" style={{ width: '370px', whiteSpace: 'nowrap' }}>
                                   <h2>Full Stack and thats it ?</h2>
                                   <p>When it comes to me (sounds narcissistic) </p>
                                   <p>while im not Reacting.tsx | | Vueing.js</p>
                                   <p>
                                        {' '}
                                        I play Piano & Guitar here are some of my <br></br> favourites songs to play :
                                   </p>
                              </div>
                         </motion.div>

                         <motion.section
                              className="flex row align-center justify-center hobbies-skills-container gap20"
                              transition={{ duration: 2.5 }}
                              initial={{ y: 0, opacity: 0, x: 2000, borderRadius: 1000 }}
                              animate={{ opacity: 1, x: 0, borderRadius: 0 }}
                         >
                              <div className="flex guitar-songs column">
                                   {constsService.SONGS_DATA.guitar.map((song: Song, idx: number) => (
                                        <motion.a key={idx} href={song.link} whileHover={{ scale: 1.05 }}>
                                             🎸 {song.title}
                                        </motion.a>
                                   ))}
                              </div>
                              <div className="flex piano-songs column">
                                   {constsService.SONGS_DATA.piano.map((song: Song, idx: number) => (
                                        <motion.a key={idx} href={song.link} whileHover={{ scale: 1.05 }}>
                                             🎹 {song.title}
                                        </motion.a>
                                   ))}
                              </div>
                         </motion.section>
                    </section>
               )}
          </>
     )
}
