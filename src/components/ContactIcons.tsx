import { GitHub, Email, LinkedIn } from "@mui/icons-material"
import { constService } from "../services/consts.service"

export default function ContactIcons() {
  return (
    <section className="contact-icons-container">
      <a href={`${constService.githubUrl}`}>
        <GitHub />
      </a>
      <a href={`${constService.linkedInUrl}`}>
        <LinkedIn />
      </a>
      <a href={`${constService.gmailAddress}`}>
        <Email />
      </a>
    </section>
  )
}
