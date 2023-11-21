"use client";
import './globals.css'
import {LeftSidebar, RightSidebar} from './components/Sidebar'
import { motion, AnimatePresence } from 'framer-motion'
import { useSelectedLayoutSegment } from 'next/navigation'
import FrozenRouter from './components/FrozenRouter';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const segment = useSelectedLayoutSegment();

  return (
    <html lang="en">
      <body>
        <AnimatePresence mode='wait' initial={false}>
          <motion.div
            className='flex justify-between w-screen h-screen'
            key={segment}
          >
            <LeftSidebar />
            <FrozenRouter>{children}</FrozenRouter>
            <RightSidebar />
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  )
}
