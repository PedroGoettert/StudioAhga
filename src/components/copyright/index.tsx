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
        <InstagramIcon size={18} />
        <YoutubeIcon size={18} />
      </div>
    </footer>
  )
}
