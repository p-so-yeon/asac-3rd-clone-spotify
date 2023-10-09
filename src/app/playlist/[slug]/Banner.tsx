function Banner() {
  return (
    <section>
      <div className="rounded-lg bg-gradient-to-r from-color-active-primary">
        <div>
          <div className="relative pointer-events-none ml-[30px] h-[30vh] flex z-0">
            <div className="absolute bottom-12  w-[192px] h-[192px] flex">
              <button className=" shadow-2xl mr-[15px]  rounded-full">
                <img className="w-[192px] h-[192px]  rounded-full" />
              </button>
            </div>
            <div className="flex flex-col whitespace-nowrap">
              <div className="absolute left-[245px] top-[85px] text-[14px]  text-color-text-primary ml-2.5">프로필</div>
              <div className="absolute left-[245px] top-[115px] text-[6rem] text-color-text-primary font-black ">
              </div>
              <div className="flex text-white absolute left-[245px] top-[250px] text-[0.8125rem] items-center">
                <div className="flex">
                  공개 플레이리스트 <div> 개</div>
                </div>
                <div>
                  <BsDot></BsDot>
                </div>
                <a>팔로잉 명</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
