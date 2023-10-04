import { MdPause, MdPlayArrow } from 'react-icons/md'

export default function PlayButton() {
  return (
    <button
      className="relative text-base font-bold text-center align-middle duration-75 rounded-full cursor-pointer touch-manipulation bg-color-accent-primary hover:scale-105"
      onClick={() => {}}
    >
      <MdPlayArrow />
      <MdPause />
    </button>
  )
}
