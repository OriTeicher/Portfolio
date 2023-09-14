import SupermanPhoto from "../assets/photos/super-ori.png"
import CaptainAmericaPhoto from "../assets/photos/ori-captain.png"
import AnimePhoto from "../assets/photos/ori-anime.png"

export default function IntroPreview() {
  return (
    <article className="intro-container flex justify-center align-center column">
      <img src={SupermanPhoto} alt="🖼️" className="main-photo" />
      <div className="main-header-container">
        <h1 className="main-header">
          Nice to meet ya! I'm <span>Ori Teicher</span>
        </h1>
        <h2 className="role-header">Full Stack / Frontend Developer</h2>
      </div>
    </article>
  )
}
