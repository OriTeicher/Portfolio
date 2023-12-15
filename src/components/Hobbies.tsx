import { MusicNoteRounded } from '@mui/icons-material'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface IndexProps {
     selectedCharacter: string
}

export default function Hobbies(props: IndexProps) {
     const [isShown, setIsShown] = useState(false)

     const songData = {
          guitar: [
               { title: 'Tears In Heaven', artist: 'Eric Clapton', link: 'https://www.youtube.com/watch?v=3U4yDkvRjvs&ab_channel=TomKovats' },
               { title: 'Every Breath You Take', artist: 'The Police', link: 'https://www.youtube.com/watch?v=_YrDIC5tZcA&ab_channel=GuitarZero2HeroExpress' },
               { title: "You've Got a Friend In Me", artist: 'Randy Newman', link: 'https://www.youtube.com/watch?v=aWhXUMbmHCA&ab_channel=AcousticTrench' },
               { title: 'Slow Dancing In a Burning Room', artist: 'John Mayer', link: 'https://www.youtube.com/watch?v=bwKXx0Ub10k&t=204s&ab_channel=SunghaJung' }
          ],
          piano: [
               { title: 'The 30th', artist: 'The Theorist', link: 'https://www.youtube.com/watch?v=w_Vgj8ndPtw&ab_channel=TheTheorist' },
               { title: 'Nuvole Bianche', artist: 'Ludovico Einaudi', link: 'https://www.youtube.com/watch?v=VUCI-1vIbUo&ab_channel=LudovicoEinaudiVEVO' },
               { title: 'River Flows In You', artist: 'Yiruma', link: 'https://www.youtube.com/watch?v=7maJOI3QMu0&ab_channel=YirumaVEVO' },
               { title: 'Merry Go Round of Life', artist: 'Joe Hisaishi', link: 'https://www.youtube.com/watch?v=UFsREhllq0c&ab_channel=PaRaD1SE' }
          ]
     }
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
                                   <p>while im not Reacting.tsx I play Piano & Guitar,</p>
                                   <p>here are some of my favourite songs to play :</p>
                              </div>
                         </motion.div>

                         <motion.section
                              className="flex row align-center justify-center hobbies-skills-container gap20"
                              transition={{ duration: 2.5 }}
                              initial={{ y: 0, opacity: 0, x: 2000, borderRadius: 1000 }}
                              animate={{ opacity: 1, x: 0, borderRadius: 0 }}
                         >
                              <div className="flex guitar-songs column">
                                   {songData.guitar.map((song, idx) => (
                                        <motion.a key={idx} href={song.link} whileHover={{ scale: 1.05 }}>
                                             🎸 {song.title}
                                        </motion.a>
                                   ))}
                              </div>
                              <div className="flex piano-songs column">
                                   {songData.piano.map((song, idx) => (
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
