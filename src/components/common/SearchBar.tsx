'use client'
import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'
export default function SearchBar({ placeholder, onChange , onClear}) {
  const [inputValue, setInputValue] = useState('')

  
  return (
    <div className="flex flex-row items-center px-2 py-2 rounded-md bg-color-card-primary">
      <FiSearch size={20} className=" text-color-text-secondary" />
      <input
        className="w-full pl-1 font-semibold bg-transparent text-color-text-secondary focus:outline-none"
        placeholder={placeholder}
        onChange={(e) => {
          const value = e.target.value
          setInputValue(value)
          onChange(value)
        }}
        value={inputValue}
      ></input>
      {inputValue && (
        <IoMdClose
          onClick={() => {
            setInputValue('')
            onClear()
          }}
          size={20}
          className="text-color-text-secondary"
        />
      )}
    </div>
  )
}
