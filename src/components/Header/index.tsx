import { Underline } from '../Underline'
import Image from 'next/image'

import ImgLogo from '../../Images/logo.png'
import style from './style.module.css'

export function Header() {
  return (
    <header className={style.header}>
      <Image src={ImgLogo} alt="Logo" width={200} />
      <Underline size="60vw" />
      <br />
      <nav className={style.nav}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Projects">Projetos</a>
          </li>
          <li>
            <a href="/InProgress">Em Andamneto</a>
          </li>
          <li>
            <a href="About">Sobre</a>
          </li>
          <li>
            <a href="/Contacts">Contatos</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
