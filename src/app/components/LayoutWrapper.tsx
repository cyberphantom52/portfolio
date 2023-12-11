"use client";
import React from 'react'
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef } from "react";
import { LeftSidebar, RightSidebar } from './Sidebar'
import { motion, AnimatePresence } from 'framer-motion'
import { useSelectedLayoutSegment } from 'next/navigation'

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

  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.div
        className='flex w-screen h-screen'
        key={segment}
      >
        <LeftSidebar className='absolute left-0'/>
        <RightSidebar className='absolute right-0' />
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  )
}