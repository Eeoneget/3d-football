import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Мини-футбол 1×1',
  description: '3D мини-футбол на двоих за одной клавиатурой',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
