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
      <a href={link}>
        <div>
          <p className={style.title}>{title}</p>
          <Image
            src={image}
            alt="foto Projetos"
            width={300}
            height={300}
            className={style.image}
          />
        </div>
      </a>
    </div>
  )
}
