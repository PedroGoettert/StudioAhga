import { Project } from '@/components/Project'
import { Underline } from '../../components/Underline'

import projectImg1 from '../../Images/profileImg.png'
import projectImg2 from '../../Images/Projeto.png'

import style from './style.module.css'

export default function Projects() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Projetos</h1>
      <div className={style.content}>
        <Project title="Projeto 1" image={projectImg1} link="#" />
        <Project title="Projeto 2" image={projectImg1} link="#" />
        <Project title="Projeto 3" image={projectImg2} link="#" />
      </div>

      <div style={{ marginBottom: 20 }}>
        <Underline size="55vw" />
      </div>
    </div>
  )
}
