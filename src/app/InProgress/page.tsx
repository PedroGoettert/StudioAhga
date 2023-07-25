import { Project } from '@/components/Project'
import { Underline } from '../../components/Underline'

import projectImg1 from '../../Images/profileImg.png'
import projectImg2 from '../../Images/Projeto.png'

import style from './style.module.css'

const projetos = [
  { id: 1, title: 'Projeto 1', image: projectImg2, route: 'Projeto1' },
  { id: 2, title: 'Projeto 2', image: projectImg1, route: 'Projeto2' },
  { id: 3, title: 'Projeto 3', image: projectImg2, route: 'Projeto3' },
]

export default function Projects() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Em Andamento</h1>
      <div className={style.content}>
        {projetos.map((projeto) => (
          <Project
            key={projeto.id}
            title={projeto.title}
            image={projeto.image}
            link={`./Projects/${projeto.route}`}
          />
        ))}
      </div>

      <div style={{ marginBottom: 20 }}>
        <Underline size="55vw" />
      </div>
    </div>
  )
}
