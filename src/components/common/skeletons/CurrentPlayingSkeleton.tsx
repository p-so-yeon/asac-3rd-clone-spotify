export default function CurrentPlayingSkeleton() {
  return (
    <div className="flex animate-pulse">
      <div className="mr-2 rounded h-14 w-14 bg-slate-600" />
      <div className="flex flex-col justify-center gap-2">
        <div className=" w-28 h-3 bg-slate-600" />
        <div className=" w-28 h-3 bg-slate-600" />
      </div>
    </div>
  )
}
