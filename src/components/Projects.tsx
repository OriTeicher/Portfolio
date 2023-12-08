import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Projects() {
     const projects = []
     const [isShown, setIsShown] = useState(false)
     const [myProjects, setMyProjects] = useState(null)

     return <motion.section className="projects-container"></motion.section>
}
