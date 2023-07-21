'use client'
import style from './style.module.css'

import { Underline } from '../components/Underline'
import { ShowImage } from '@/components/ShowImage'

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
          <ShowImage />
        </div>
      </section>

      <div style={{ marginBottom: 20 }}>
        <Underline size="55vw" />
      </div>
    </main>
  )
}
