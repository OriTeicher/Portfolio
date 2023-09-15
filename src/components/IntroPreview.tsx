import { useState } from 'react'
import SupermanImg from '../assets/photos/super-ori.png'
import AnimeImg from '../assets/photos/ori-anime.png'
import RegularImg from '../assets/photos/regular ori.jpg'
import VintageImg from '../assets/photos/ori-vintage.png'
import CaptainImg from '../assets/photos/ori-captain.png'
import PinzziPhoto from '../assets/photos/oris-dog.jpg'

export default function IntroPreview() {
    const [selectedImg, setSelectedImg] = useState(RegularImg)
    const [isAnimationOn, setIsAnimationOn] = useState(false)

    const handleSelectedBtn = (selectedImgSrc: string) => {
        if (selectedImgSrc === selectedImg) return
        setIsAnimationOn(true)
        setTimeout(() => {
            setSelectedImg(selectedImgSrc)
            setIsAnimationOn(false)
        }, 250)
    }

    const imageOptions = [
        { imgSrc: RegularImg, label: 'Just Ori...' },
        { imgSrc: PinzziPhoto, label: 'My Beloved Dog' },
        { imgSrc: SupermanImg, label: 'Teicherman' },
        { imgSrc: VintageImg, label: 'Peaky Blinder' },
        { imgSrc: AnimeImg, label: 'Main Character' },
        { imgSrc: CaptainImg, label: 'Captain Kfar Sava' }
    ]

    return (
        <article className="container intro-container flex align-center column">
            <div className={`img-container ${isAnimationOn ? 'flipped' : ''}`}>
                <img src={selectedImg} alt="🖼️" className="main-photo" />
            </div>
            <div className="main-header-container">
                <h1 className="main-header">
                    <span>Nice to meet ya!</span> <span>I'm Ori Teicher</span>
                </h1>
                <h2 className="role-header">Full Stack / Frontend Developer</h2>
            </div>
            <div className="flex column text-align-center">
                <p className="description">You are more than welcome to see me as...</p>
                <div className="btns-container grid justify-center align-center">
                    {imageOptions.map((option) => (
                        <button key={option.label} onClick={() => handleSelectedBtn(option.imgSrc)} className={selectedImg === option.imgSrc ? 'selected' : ''}>
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>
        </article>
    )
}
