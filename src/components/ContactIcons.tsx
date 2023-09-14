import { GitHub, Email, LinkedIn } from "@mui/icons-material"
import { constService } from "../services/consts.service"

export default function ContactIcons() {
  return (
    <section className="contact-icons-container flex">
      <a href={`${constService.githubUrl}`} className="icon">
        <GitHub />
      </a>
      <a href={`${constService.linkedInUrl}`} className="icon">
        <LinkedIn />
      </a>
      <a href={`${constService.gmailAddress}`} className="icon">
        <Email />
      </a>
    </section>
  )
}
