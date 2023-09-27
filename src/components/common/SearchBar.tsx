'use client'
import React from 'react'
import { FiSearch } from 'react-icons/fi'
export default function SearchBar({ placeholder, onChange }) {
  return (
    <div className="flex flex-row items-center px-2 py-2 rounded-md bg-color-card-primary">
      <FiSearch size={20} className=" text-color-text-secondary" />
      <input
        className="w-full pl-1 font-semibold bg-transparent text-color-text-secondary focus:outline-none"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      ></input>
    </div>
  )
}
