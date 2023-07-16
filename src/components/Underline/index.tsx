import style from './style.module.css'

interface PropsUnderline {
  size: string
}

export function Underline({ size }: PropsUnderline) {
  return <div className={style.underline} style={{ width: size }}></div>
}
