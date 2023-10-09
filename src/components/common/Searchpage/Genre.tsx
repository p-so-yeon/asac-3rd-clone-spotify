import Image from 'next/image'
export default async function Genre({ name, url, color }: Props) {
  return (
    <div className={`text-white w-[186px] h-[186px]  rounded-lg bg-${color}`} style={{ background: color }}>
      <div className="pl-3 pt-4 text-2xl font-bold "> {name} </div>
      <Image src={url} alt="카테고리"></Image>
    </div>
  )
}
