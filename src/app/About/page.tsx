import Image from 'next/image'
import ImgProfile from '../../Images/profileImg.png'
import style from './style.module.css'
import { Underline } from '@/components/Underline'

export default function About() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Sobre mim</h1>
      <div style={{ marginBottom: '2rem' }}>
        <div className={style.content}>
          <Image src={ImgProfile} alt="Profile Image" height={250}></Image>

          <div>
            <p>
              Sou Arquiteto e Urbanista graduado, em 2016, pelo Centro
              Universitário Ritter dos Reis &#40;UNIRITTER&#41;, eu Henrique
              Goettert gosto de sair do tradicional, busco sempre novas ideias e
              inspirações para os meus clientes e parceiros.
            </p>
            <p>
              Além da arquitetura, posso dizer que sigo a linha do Design
              Criativo no estilo faça você mesmo. Sou apaixonado pela
              transformação e reaproveitamento dos materiais que com um pouco de
              criatividade tornam-se algo super contemporâneo e funcional. Sendo
              assim, através do Studio Ahga, quero dizer que podemos sim, fazer
              uma arquitetura inteligente, sustentável, consciente e econômica,
              ser mais elegante e criativa.
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: 20 }}>
        <Underline size="55vw" />
      </div>
    </div>
  )
}
