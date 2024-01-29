"use client";
import React from 'react'
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef } from "react";
import { Sidebar } from './Sidebar'
import { motion, AnimatePresence } from 'framer-motion'
import { useSelectedLayoutSegment } from 'next/navigation'
import Link from 'next/link';
import ThemeToggle from './ThemeSwitcher';

export function FrozenRouter({
  children,
}: {
  children: React.ReactNode
}) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
}

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const segment = useSelectedLayoutSegment();

  const leftSidebarElements = [
      <Link href="/" className="rotate-180 pointer-events-auto">HOME</Link>,
      <span className="rotate-180 pointer-events-auto">W</span>,
      <span className='rotate-180 pointer-events-auto'>CONTACT</span>
  ];

  const rightSidebarElements = [
    <Link href="https://github.com/cyberphantom52/" className='pointer-events-auto'>GitHub</Link>,
    <ThemeToggle className="pointer-events-auto"/>,
    <Link href="https://gitlab.com/cyberphantom52/" className='pointer-events-auto'>GitLab</Link>
  ];

  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.div
        className='flex w-screen h-screen'
        key={segment}
      >
        <FrozenRouter>{children}</FrozenRouter>
        <Sidebar className='absolute left-0' elements={leftSidebarElements} />
        <Sidebar className='absolute right-0' elements={rightSidebarElements} />
      </motion.div>
    </AnimatePresence>
  )
}