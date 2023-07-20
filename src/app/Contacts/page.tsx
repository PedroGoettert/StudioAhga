import { Underline } from '@/components/Underline'

import { Phone, Mail } from 'lucide-react'
import style from './style.module.css'
import WhatsLogo from '../../assets/svg/WhatsLogo'

export default function Contacts() {
  const link = `https://wa.me/5551984840252`

  return (
    <div className={style.container}>
      <h1 className={style.title}>Meus Contatos</h1>

      <div className={style.content}>
        <div className={style.contactsContainer}>
          <div>
            <Phone /> <p>51 98484-0252</p>
          </div>
          <div>
            <Mail /> <p>henrique@studioahga.arq.br</p>
          </div>
        </div>

        <div className={style.whatsContainer}>
          <strong>Quer um projeto?</strong>
          <p>Aperte no botão abaixo e vamos conversar sobre!</p>

          <a href={link} className={style.WhatButton}>
            <WhatsLogo />
            <p>Mandar Mensagem</p>
          </a>
        </div>
      </div>
      <Underline size="55vw" />
    </div>
  )
}
