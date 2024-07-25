import React from "react";
import { HiChatAlt, HiOutlineBell, HiOutlineSearch } from "react-icons/hi";
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { HeaderLinks } from "./HeaderLinks";

export default function Header() {
  return (
    <div className="bg-custom-darkBlue h-16 px-4 flex justify-between items-center shadow-md">
      <div className="relative flex items-center">
        {/* <HiOutlineSearch fontSize={20} className="text-custom-light absolute left-4 top-1/2 transform -translate-y-1/2" /> */}
        {/* <input 
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 text-sm focus:outline-none rounded-sm bg-custom-light w-[24rem]"
        /> */}
        <h1 className="text-white">PURE PETALS</h1>
      
      </div>
      
      <div className="flex items-center space-x-4">
      <div className="ml-4 flex space-x-4 ">
          {HeaderLinks.map((link) => (
            <SidebarLink key={link.key} item={link} />
          ))}
        </div>
        <Popover className="relative">
          <>
            <PopoverButton className="p-3 rounded-full  hover:bg-custom-pink focus:outline-none">
              <HiOutlineBell fontSize={24} />
            </PopoverButton>
            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute right-0 mt-2 w-48 bg-white border border-custom-darkBlue rounded-md shadow-lg">
                <div className="p-4">No new notifications</div>
              </PopoverPanel>
            </Transition>
          </>
        </Popover>
        <HiChatAlt fontSize={24} className="text-custom-light" />
      </div>
    </div>
  );
}

function SidebarLink({ item }) {
  const { pathname } = useLocation();
  
  return (
    <Link 
      to={item.path} 
      className={classNames(
        'flex items-center space-x-2 px-4 py-2 rounded-sm',
        pathname === item.path ? 'bg-custom-light text-black' : 'text-custom-light hover:bg-custom-blue'
      )}
    >
      <span className="text-xl text-black">{item.icon}</span>
      <span className="text-black">{item.label}</span>
    </Link>
  );
}
