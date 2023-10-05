import Image from 'next/image'
export default async function Genre({ name, url }: Props) {
  return (
    <div className="text-white w-[186px] h-[186px] bg-[#8942e6] rounded-lg">
      {name} <Image src={url}></Image>
    </div>
  )
}
