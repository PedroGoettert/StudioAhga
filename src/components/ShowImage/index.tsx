import { useEffect, useState } from 'react'
import Image from 'next/image'
import project1 from '../../Images/Projeto.png'
import project2 from '../../Images/profileImg.png'

import style from './style.module.css'

export function ShowImage() {
  const [imageIndex, setImageIndex] = useState(0)
  const images = [project1, project2]

  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  useEffect(() => {
    const interval = setInterval(nextImage, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={style.container}>
      <Image
        src={images[imageIndex]}
        alt="texto qualquer"
        key={1}
        width={600}
        height={300}
        className={style.image}
      />
    </div>
  )
}
