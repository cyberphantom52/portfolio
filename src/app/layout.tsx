import type { Metadata } from 'next'
import './globals.css'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import { url } from 'inspector'


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
    <html lang="en">
      <body className={`flex justify-between h-screen`}>
          <LeftSidebar />
          {children}
          <RightSidebar />
      </body>
    </html>
  )
}
