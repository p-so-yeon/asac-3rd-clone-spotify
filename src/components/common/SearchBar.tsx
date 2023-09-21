import React from 'react'
import { FiSearch } from 'react-icons/fi'
export default function SearchBar({ placeholder, onChange }) {
  return (
    <div className="flex flex-row bg-color-card-primary items-center py-2 rounded-md px-2">
      <FiSearch size={20} className=" text-color-text-secondary" />
      <input
        className=" pl-1 w-full bg-transparent text-color-text-secondary font-semibold "
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      ></input>
    </div>
  )
}
