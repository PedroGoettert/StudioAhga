import { Project } from '@/components/Project'
import projectImg1 from '../../Images/profileImg.png'
import style from './style.module.css'
import { Underline } from '../../components/Underline'

export default function Projects() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <Project title="Projeto 1" image={projectImg1} link="#" />
        <Project title="Projeto 2" image={projectImg1} link="#" />
      </div>

      <div style={{ marginBottom: 20 }}>
        <Underline size="55vw" />
      </div>
    </div>
  )
}
