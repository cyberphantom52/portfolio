import React from 'react'

type SidebarProps = {
  className?: string;
  elements: React.JSX.Element[];
};

export function Sidebar({ className, elements }: SidebarProps) {
  return (
    <div className={`${className} h-full w-16 lg:w-20 p-4 flex justify-between items-center vertical-writing-lr text-text font-bold pointer-events-none`}>
      {elements}
    </div>
  );
}

export default Sidebar;
