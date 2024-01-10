import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Toolbar from '@/components/Toolbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='
      h-screen
    '>
      <body className={`
        ${inter.className}
        h-full
      `}>
        <Header />
        {children}
        <Toolbar />
      </body>
    </html>
  )
}
