import Image, { StaticImageData } from 'next/image'
import style from './style.module.css'

interface ProjectProps {
  title: string
  image: StaticImageData
  link: string
}

export function Project({ title, image, link }: ProjectProps) {
  return (
    <div className={style.container}>
      <p className={style.title}>{title}</p>
      <div>
        <Image src={image} alt="foto Projetos" className={style.image} />
      </div>
    </div>
  )
}
