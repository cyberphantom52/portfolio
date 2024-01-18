import React from 'react';
import { motion } from 'framer-motion';

function ThemeToggle({
  className,
}: {
  className?: string
}) {
  const toggleTheme = () => {
    if (localStorage.getItem('theme') === 'light') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9, rotate: 180 }}
      className={`${className} aspect-square w-full`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        onClick={toggleTheme}
      >
        <path
          fill="var(--text)"
          d="M12 16a4 4 0 0 0 0-8v8Z" />
        <path
          fill="var(--text)"
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm0 2v4a4 4 0 1 0 0 8v4a8 8 0 1 0 0-16Z"
        />
      </svg>
    </motion.button>
  )
};

export default ThemeToggle
