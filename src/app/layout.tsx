import type { Metadata } from 'next'
import './globals.css'
import LayoutWrapper from './components/LayoutWrapper';

export const metadata: Metadata = {
  title: 'Website',
  description: 'Good Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className='font-usual'>
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  )
}
