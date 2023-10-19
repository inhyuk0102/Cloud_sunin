import { Inter } from 'next/font/google'
import './globals.css'
import Link from "next/link"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '선인고 클라우드',
  description: '좋은곳',
}

export default function RootLayout({ children }) {
  return (




    
    <html lang="en">
      <body className={inter.className}>   
      <div className='navbar'>
      <Link href="/">홈 </Link>
      <Link href="/list">작품들 </Link>
      <Link href="https://forms.gle/WSCV9du8uwXzF1KMA">
        신청하기
      </Link>

      </div>
        {children}</body>
    </html>
  )
}
