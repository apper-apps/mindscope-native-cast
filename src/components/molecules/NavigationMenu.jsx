import React from 'react'
import { NavLink } from 'react-router-dom'
import { cn } from '@/utils/cn'

const NavigationMenu = ({ items, className, onItemClick }) => {
  return (
    <nav className={cn("flex", className)}>
      {items.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          onClick={onItemClick}
          className={({ isActive }) =>
            cn(
              "px-4 py-2 rounded-lg font-medium transition-all duration-200",
              "hover:bg-gray-100 hover:text-primary",
              isActive
                ? "text-primary bg-gray-50 border-b-2 border-primary"
                : "text-gray-700"
            )
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default NavigationMenu