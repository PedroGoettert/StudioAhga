import style from './style.module.css'

import project1 from '../Images/Projeto.png'
import Image from 'next/image'

export default function Home() {
  return (
    <main className={style.container}>
      <section className={style.content}>
        <h1 className={style.title}>Seja Bem vindo ao Studio Ahga</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae
          deleniti ut iure sit voluptatibus et fuga, laborum nemo, esse sequi
          molestiae fugit id recusandae, quos culpa? Esse, harum error.
        </p>

        <div className={style.images}>
          <Image src={project1} alt="" height={300} />
          <Image src={project1} alt="" height={300} />
          <Image src={project1} alt="" height={300} />
        </div>
      </section>
    </main>
  )
}
