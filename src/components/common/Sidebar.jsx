'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { BiLibrary } from 'react-icons/bi';
import { GoHome } from 'react-icons/go';

function Sidebar() {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: GoHome,
        label: '홈',
        active: pathname !== '/search',
        href: '/',
      },
      {
        icon: BiSearch,
        label: '검색하기',
        active: pathname === '/search',
        href: '/search',
      },
    ],
    [pathname]
  );
  return (
    <div className="fixed w-[300px] h-screen bg-black px-2 py-2 flex flex-col gap-2">
      <div className=" bg-color-box-primary rounded-lg px-3 py-2">
        <div className="flex-col">
          {routes.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-black hover:text-white transition duration-500 px-2 py-2 my-0.5 flex flex-row items-center active:text-white text-color-text-secondary"
            >
              <item.icon className="mr-3" size={26} />
              <p className="w-full  ">{item.label}</p>
            </Link>
          ))}
        </div>
      </div>
      <main className="bg-color-box-primary rounded-lg h-fit w-full  py-2">
        {/* Library header */}
        <header className="font-black flex items-center justify-between px-5 py-2">
          <div className="inline-flex items-center gap-x-2">
            <BiLibrary className="text-color-text-secondary" size={26} />
            <p className=" text-color-text-secondary ">내 라이브러리</p>
          </div>
          <AiOutlinePlus
            size={20}
            className="text-neutral-300 hover:text-white cursor-pointer transition"
          />
        </header>

        {/*Library list*/}
        <div className="h-screen overflow-y-auto px-5 py-2">
          <div className="flex items-center justify-between ">
            <BiSearch size={18} className="font-black text-color-text-secondary" />
            <p className="font-bold text-xs text-color-text-secondary"> Recents</p>
          </div>
          <div className="h-20">Example list</div>
          <div className="h-20">Example list</div>
          <div className="h-20">Example list</div>
          <div className="h-20">Example list</div>
          <div className="h-20">Example list</div>
          <div className="h-20">Example list</div>
          <div className="h-20">Example list</div>
          <div className="h-20">Example list</div>
          <div className="h-20">Example list</div>
          <div className="h-20">Example list</div>
          <div className="h-20">Example list</div>
          <div className="h-20">Example list</div>
          <div className="h-20">Example list</div>
          <div className="h-20">Example list</div>
          <div className="h-20">Example list</div>
          <div className="h-20">Example list</div>
          <div className="h-20">Example list</div>
        </div>
      </main>
    </div>
  );
}

export default Sidebar;
