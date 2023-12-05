import { useState } from 'react'
import About from './About'
import IntroPreview from './IntroPreview'
import RegularImg from '../assets/photos/regular ori.jpg'
import Projects from './Projects'
import Hobbies from './Hobbies'

export default function AppIndex() {
     const [selectedCharacter, setSelectedCharacter] = useState(RegularImg)

     const handleSelectedCharacter = (selectedImg: string) => {
          setSelectedCharacter(selectedImg)
     }

     return (
          <section className="app-index-container m-bottom1000">
               <IntroPreview onSelectedCharacter={handleSelectedCharacter} />
               <div className="flex column">
                    <About selectedCharacter={selectedCharacter} />
                    <Hobbies selectedCharacter={selectedCharacter} />
               </div>
               <Projects />
          </section>
     )
}

// TODO: create projects cmp */
// TODO: create cmp on hover show skills used */
// TODO: create contact me cmp
