import React from 'react'

type SidebarProps = {
  className?: string;
  elements: React.JSX.Element[];
};

export function Sidebar({ className, elements }: SidebarProps) {
  return (
    <div className={`${className} flex vertical-writing-lr py-5 place-content-between place-items-center h-full w-[5%] text-text font-bold pointer-events-none`}>
      {elements}
    </div>
  );
}

export default Sidebar;
