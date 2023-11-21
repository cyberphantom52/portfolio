"use client";
import React from 'react'
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef } from "react";
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
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
        className='flex justify-between w-screen h-screen'
        key={segment}
      >
        <LeftSidebar />
        <FrozenRouter>{children}</FrozenRouter>
        <RightSidebar />
      </motion.div>
    </AnimatePresence>
  )
}