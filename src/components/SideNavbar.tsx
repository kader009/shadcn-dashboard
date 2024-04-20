'use client';

import { useState } from 'react';
import { Nav } from './ui/nav';

type Props = {};

import {
  ShoppingCart,
  LayoutDashboard,
  UsersRound,
  Settings,
  ChevronRight,
  ShoppingBasket,
  CalendarDays,
} from 'lucide-react';
import { Button } from './ui/button';

import { useWindowWidth } from '@react-hook/window-size';
import dynamic from 'next/dynamic';

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative min-w-[80px] border-r px-3  pb-10 pt-24 ">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: 'Dashboard',
            href: '/',
            icon: LayoutDashboard,
            variant: 'default',
          },
          {
            title: 'Users',
            href: '/users',
            icon: UsersRound,
            variant: 'ghost',
          },
          {
            title: 'Product',
            href: '/product',
            icon: ShoppingBasket,
            variant: 'ghost',
          },
          {
            title: 'Orders',
            href: '/orders',
            icon: ShoppingCart,
            variant: 'ghost',
          },
          {
            title: 'Calendar',
            href: '/calendar',
            icon: CalendarDays,
            variant: 'ghost',
          },
          {
            title: 'Settings',
            href: '/settings',
            icon: Settings,
            variant: 'ghost',
          },
        ]}
      />
    </div>
  );
}
