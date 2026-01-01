import './globals.css'
import Header from '@/components/Header'

export const metadata = {
  title: 'CP VU合同会社 - 製品紹介',
  description: 'CP VU合同会社の公式ウェブサイト',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

