import { Comfortaa } from 'next/font/google'
import { Header } from '@/components/Header'

import './globals.css'

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
      <body className={confortaa.className} style={{ height: '100vh' }}>
        <Header />

        <div
          style={{
            marginTop: '10px',
          }}
        >
          {children}
        </div>
      </body>
    </html>
  )
}
