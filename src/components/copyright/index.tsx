import { CopyrightIcon, InstagramIcon, YoutubeIcon } from 'lucide-react'
import style from './style.module.css'
export default function Copyright() {
  return (
    <footer className={style.container}>
      <div className={style.content}>
        <CopyrightIcon size={18} />
        <p>2023 Henrique de Souza Goettert. Todos os Direitos Reservados</p>
      </div>
      <div className={style.logos}>
        <a href="https://www.instagram.com/studioahga/">
          <InstagramIcon size={18} />
        </a>
        <a href="https://www.youtube.com/">
          <YoutubeIcon size={18} />
        </a>
      </div>
    </footer>
  )
}
