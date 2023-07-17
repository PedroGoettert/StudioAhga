import { Comfortaa } from 'next/font/google'
import { Header } from '@/components/Header'

import './globals.css'
import Copyright from '@/components/copyright'

const confortaa = Comfortaa({
  subsets: ['latin'],
})

export const metadata = {
  title: 'Studio Ahga',
  description: 'Site de Arquitetura',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={confortaa.className}
        style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}
      >
        <Header />

        {children}

        <Copyright />
      </body>
    </html>
  )
}
