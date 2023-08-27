'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { BiSearch } from 'react-icons/bi';
import { GoHome } from 'react-icons/go';
import { BiLibrary } from 'react-icons/bi';
import {AiOutlinePlus} from 'react-icons/ai';
function Sidebar() {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: GoHome,
        label: 'Home',
        active: pathname !== '/search',
        href: '/',
      },
      {
        icon: BiSearch,
        label: 'Search',
        active: pathname === '/search',
        href: '/search',
      },
    ],
    [pathname]
  );
  return (
    <div className="flex flex-col h-full bg-black">
      <div className="bg-teal-950 rounded-lg h-fit w-full">
        <div>
          {routes.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="active:text-white text-neutral-300"
            >
              <item.icon className="" size={26} />
              <p className="w-full">{item.label}</p>
            </Link>
          ))}
        </div>
      </div>
      <main className="bg-teal-950 rounded-lg h-fit w-full ">
        {/* Library header */}
        <div>
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-x-2">
              <BiLibrary className="text-neutral-300" size={26}/>
              <p className="font-medium text-neutral-300 text-md">내 라이브러리</p>
            </div>
            <AiOutlinePlus  size={20} className="text-neutral-300 hover:text-white cursor-pointer transition"/>
          </div>
          <div className="flex items-center justify-between">
            <BiSearch className="text-neutral-300"/>
            <p className="text-neutral-300"> Recents</p>
          </div>
        </div>
        {/*Library list*/}
        <div className="h-full overflow-y-auto">
            <div className="h-20">Example list</div>
            <div className="h-20">Example list</div>
            <div className="h-20">Example list</div>

        </div>
        
      </main>
    </div>
  );
}

export default Sidebar;
