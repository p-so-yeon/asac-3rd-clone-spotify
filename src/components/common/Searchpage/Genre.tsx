export default async function Genre({ name, url, color, link }: Props) {
  return (
    <div>
      <div
        className={`text-white w-[186px] h-[186px] relative truncate rounded-lg bg-${color}"cursor-pointer"`}
        style={{ background: color }}
      >
        <div className="pl-3 pt-4 text-2xl font-bold "> {name} </div>
        <img src={url} className="absolute left-20 top-20 w-[130px] h-[130px] rotate-45 " alt="카테고리"></img>
      </div>
    </div>
  )
}
