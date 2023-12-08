import { constsService } from '../services/consts.service'
import { GitHub, Email, LinkedIn } from '@mui/icons-material'
import { motion } from 'framer-motion'
export default function ContactIcons() {
     return (
          <motion.section transition={{ duration: 2 }} initial={{ x: 2000 }} animate={{ x: 0 }} className="contact-icons-container flex">
               <a href={`${constsService.GITHUB_URL}`} target="_blank" className="icon" rel="noreferrer">
                    <GitHub />
               </a>
               <a href={`${constsService.LINKEDIN_URL}`} target="_blank" className="icon" rel="noreferrer">
                    <LinkedIn />
               </a>
               <a href={`${constsService.GMAIL_ADRESS}`} target="_blank" className="icon" rel="noreferrer">
                    <Email />
               </a>
          </motion.section>
     )
}
