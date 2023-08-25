'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { BiSearch } from 'react-icons/bi';
import { GoHome } from 'react-icons/go';

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
    <div className="flex h-full">
      <div className="bg---color-box-primary rounded-lg h-fit w-full">
        <div>
          {routes.map((item) => (
            <Link key={item.label} href={item.href} className="active:text-white">
              <item.icon size={26} />
              <p className="w-full">{item.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
