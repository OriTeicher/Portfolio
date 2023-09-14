import { GitHub, Email, LinkedIn } from "@mui/icons-material"
import { constService } from "../services/consts.service"

export default function ContactIcons() {
  return (
    <section className="contact-icons-container flex">
      <a
        href={`${constService.githubUrl}`}
        target="_blank"
        className="icon"
        rel="noreferrer"
      >
        <GitHub />
      </a>
      <a
        href={`${constService.linkedInUrl}`}
        target="_blank"
        className="icon"
        rel="noreferrer"
      >
        <LinkedIn />
      </a>
      <a
        href={`${constService.gmailAddress}`}
        target="_blank"
        className="icon"
        rel="noreferrer"
      >
        <Email />
      </a>
    </section>
  )
}
