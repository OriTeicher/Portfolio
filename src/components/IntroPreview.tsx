import { useState } from 'react'
import SupermanPhoto from '../assets/photos/super-ori.png'
import AnimePhoto from '../assets/photos/ori-anime.png'
import RegularPhoto from '../assets/photos/regular ori.jpg'
import VintagePhoto from '../assets/photos/ori-vintage.png'

export default function IntroPreview() {
    const [selectedPhoto, setSelectedPhoto] = useState(RegularPhoto)
    const handleSelectedBtn = (option: string) => setSelectedPhoto(option)

    return (
        <article className="container intro-container flex align-center column">
            <div className="img-container">
                <img src={selectedPhoto} alt="🖼️" className="main-photo" />
            </div>
            <div className="main-header-container">
                <h1 className="main-header">
                    Nice to meet ya! I'm <span>Ori Teicher</span>
                </h1>
                <h2 className="role-header">Full Stack / Frontend Developer</h2>
            </div>
            <div className="flex column text-align-center">
                <p className="description">You are more than welcome to see me as...</p>
                <div className="btns-container grid justify-center align-center">
                    <button onClick={() => handleSelectedBtn(RegularPhoto)}>Regular Ori</button>
                    <button onClick={() => handleSelectedBtn(SupermanPhoto)}>Super Ori</button>
                    <button onClick={() => handleSelectedBtn(VintagePhoto)}>Peaky Blinders Ori</button>
                    <button onClick={() => handleSelectedBtn(AnimePhoto)}>Main Character Ori</button>
                </div>
            </div>
        </article>
    )
}
