'use client'
import React from 'react'

export default function LayoutResizer() {
  const windowWidth =
    document.querySelector('body') !== undefined ? document.querySelector('body')?.clientWidth! * 0.8 : 280

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    console.log(e.target.value)
  }
  return (
    <div className="w-2 h-full cursor-e-resize">
      <label className="overflow-hidden w-[1px]">
        메인 탐색 창 크기 조절
        <input type="range" step={10} min={72} max={windowWidth} onInput={onInput} />
      </label>
    </div>
  )
}
