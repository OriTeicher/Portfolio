import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { WavingHandRounded } from '@mui/icons-material'

import SupermanImg from '../assets/photos/super-ori.png'
import AnimeImg from '../assets/photos/ori-anime.png'
import RegularImg from '../assets/photos/regular ori.jpg'
import VintageImg from '../assets/photos/ori-vintage.png'
import CaptainImg from '../assets/photos/ori-captain.png'
import PinzziPhoto from '../assets/photos/oris-dog.jpg'
import { ContactMail } from '@mui/icons-material'

interface IndexProps {
     onSelectedCharacter: Function
}
const imageOptions = [
     { imgSrc: RegularImg, label: 'Just Ori...'.toUpperCase() },
     { imgSrc: PinzziPhoto, label: 'My Beloved Dog'.toUpperCase() },
     { imgSrc: SupermanImg, label: 'Teicherman'.toUpperCase() },
     { imgSrc: VintageImg, label: 'Peaky Blinder'.toUpperCase() },
     { imgSrc: AnimeImg, label: 'Main Character'.toUpperCase() },
     { imgSrc: CaptainImg, label: 'Captain Kfar Sava'.toUpperCase() }
]

export default function IntroPreview(props: IndexProps) {
     // eslint-disable-next-line react-hooks/exhaustive-deps
     const [isScroll, setIsScroll] = useState(false)
     const [isAnimationOn, setIsAnimationOn] = useState(false)
     const [isImgHovered, setIsImgHovered] = useState(false)
     const [areImagesLoaded, setAreImagesLoaded] = useState(false)
     const [selectedImg, setSelectedImg] = useState(RegularImg)

     useEffect(() => {
          const imagePromises = imageOptions.map((option) => {
               return new Promise((resolve, reject) => {
                    const img = new Image()
                    img.src = option.imgSrc
                    img.onload = () => resolve('')
                    img.onerror = () => reject('')
               })
          })

          Promise.all(imagePromises)
               .then(() => setAreImagesLoaded((prev) => !prev))
               .catch(() => setAreImagesLoaded((prev) => !prev))
     }, [])

     useEffect(() => {
          const handleScroll = () => {
               setIsScroll(window.scrollY > 20 )
          }

          window.addEventListener('scroll', handleScroll)

          return () => {
               window.removeEventListener('scroll', handleScroll)
          }
     }, [])

     const handleSelectedBtn = (selectedImgSrc: string) => {
          if (selectedImgSrc === selectedImg || !areImagesLoaded) return
          setIsAnimationOn(true)
          setTimeout(() => {
               setSelectedImg(selectedImgSrc)
               setIsAnimationOn(false)
          }, 170)
          props.onSelectedCharacter(selectedImgSrc)
     }

     return (
          <motion.article
               transition={{ duration: 0.4 }}
               initial={{ y: -1000 }}
               animate={{ y: 0, opacity: isScroll ? 0 : 1 }}
               className={`container intro-container flex align-center column show ${isScroll && window.innerWidth > 1000 ? 'hide' : ''}`}
          >
               <div className={`img-container ${isAnimationOn ? 'flipped' : ''} ${isImgHovered ? 'hovered' : ''}`}>
                    <img src={selectedImg} alt="🖼️" className="main-img" onMouseEnter={() => setIsImgHovered(true)} onMouseLeave={() => setIsImgHovered(false)} />
               </div>
               <div className={`main-header-container`}>
                    <div className="main-header text-align-center">
                         <p>
                              Hello there <WavingHandRounded /> Im <span>Ori Teicher</span>
                         </p>
                    </div>
                    <h2 className="role-header">Full Stack / Frontend Developer</h2>
                    {areImagesLoaded ? <p className="description">🟣 This is not a regular portfolio... choose your player 🟣 </p> : <p className="description">Loading images...</p>}
               </div>
               <div className={`flex column text-align-center justify-center`}>
                    <motion.div transition={{ duration: 2 }} initial={{ x: 0, y: 3000 }} animate={{ y: 0, x: 0, opacity: 1 }} className={`btns-container grid justify-center align-center`}>
                         {imageOptions.map((option) => (
                              <button key={option.label} onClick={() => handleSelectedBtn(option.imgSrc)} className={selectedImg === option.imgSrc ? 'selected' : ''} disabled={!areImagesLoaded}>
                                   {option.label}
                              </button>
                         ))}
                    </motion.div>
               </div>
          </motion.article>
     )
}
