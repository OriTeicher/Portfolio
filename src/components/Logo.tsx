import { motion } from 'framer-motion'

export default function Logo() {
     return (
          <motion.h3 className="logo" transition={{ duration: 2 }} initial={{ x: -2000 }} animate={{ x: 0 }}>
               <span>{'<'}</span>
               Ori
               <span>
                    Dev
                    <span />
               </span>
               {' /'}
               <span>{'>'}</span>
          </motion.h3>
     )
}
