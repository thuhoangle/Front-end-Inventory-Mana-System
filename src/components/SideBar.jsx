import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { BsBoxSeam, BsCart2, BsClipboard, BsTruck, BsClipboardData } from "react-icons/bs";
import { LuHistory, LuLogOut } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import * as Avatar from "@radix-ui/react-avatar";
import { FaWarehouse } from "react-icons/fa";

const SideBar = () => {
    const navigate = useNavigate();
    const active = 'text-blue bg-lightBlue ';
    const normal = '';

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    return (
        <NavigationMenu.Root orientation='vertical' className='h-screen w-fit md:w-[240px] bg-white px-4 pb-2.5'>
            <div className='flex flex-col h-screen justify-between py-2'>
                <div>
                    <div className={'flex md:justify-center items-center text-blue pt-2 pb-4 gap-1 border-b-2'}>
                        <FaWarehouse className={'w-[2.5rem] h-[2.5rem]'} />
                        <span className='font-black text-4xl hidden md:block'>Group1</span>
                    </div>

                    <div>
                        <NavigationMenu.List className={'list-none gap-2 py-2 mt-2.5'}>
                            <NavLink to={'/dashboard'} className={({ isActive }) => (isActive ? active : normal)}>
                                <NavigationMenu.Item
                                    className={`active:text-blue justify-start items-center hover:bg-lightGray hover:text-gray-700 flex no-underline outline-none p-2.5 gap-4 text-xl font-semibold rounded-lg`}
                                >
                                    <RxDashboard className={'h-6 w-6'} />
                                    <span className={'hidden md:block'}>Dashboard</span>
                                </NavigationMenu.Item>
                            </NavLink>

                            <NavLink to={'/inventory'} className={({ isActive }) => (isActive ? active : normal)}>
                                <NavigationMenu.Item
                                    className={`justify-start items-center hover:bg-lightGray hover:text-gray-700 flex no-underline outline-none p-2.5 gap-4 text-xl font-semibold rounded-lg active:bg-lightBlue`}
                                >
                                    <BsBoxSeam className={'h-6 w-6'} />
                                    <span className={'hidden md:block'}>Inventory</span>
                                </NavigationMenu.Item>
                            </NavLink>

                            <NavLink to={'/supplier'} className={({ isActive }) => (isActive ? active : normal)}>
                                <NavigationMenu.Item
                                    className={'justify-start items-center hover:bg-lightGray hover:text-gray-700 flex no-underline outline-none p-2.5 gap-4 text-xl font-semibold rounded-lg'}
                                >
                                    <BsTruck className={'h-6 w-6'} />
                                    <span className={'hidden md:block'}>Supplier</span>
                                </NavigationMenu.Item>
                            </NavLink>

                            <NavLink to={'/product'} className={({ isActive }) => (isActive ? active : normal)}>
                                <NavigationMenu.Item
                                    className={'justify-start items-center hover:bg-lightGray hover:text-gray-700 flex no-underline outline-none p-2.5 gap-4 text-xl font-semibold rounded-lg'}
                                >
                                    <BsCart2 className={'h-6 w-6'} />
                                    <span className={'hidden md:block'}>Product</span>
                                </NavigationMenu.Item>
                            </NavLink>

                            <NavLink to={'/order'} className={({ isActive }) => (isActive ? active : normal)}>
                                <NavigationMenu.Item
                                    className={'justify-start items-center hover:bg-lightGray hover:text-gray-700 flex no-underline outline-none p-2.5 gap-4 text-xl font-semibold rounded-lg'}
                                >
                                    <BsClipboard className={'h-6 w-6'} />
                                    <span className={'hidden md:block'}>Order</span>
                                </NavigationMenu.Item>
                            </NavLink>

                            <NavLink to={'/export'} className={({ isActive }) => (isActive ? active : normal)}>
                                <NavigationMenu.Item
                                    className={'justify-start items-center hover:bg-lightGray hover:text-gray-700 flex no-underline outline-none p-2.5 gap-3 text-xl font-semibold rounded-lg'}
                                >
                                    <BsClipboardData className={'h-6 w-6'} />
                                    <span className={'hidden md:block'}>Export</span>
                                </NavigationMenu.Item>
                            </NavLink>

                            <NavLink to={'/export-history'} className={({ isActive }) => (isActive ? active : normal)}>
                                <NavigationMenu.Item
                                    className={'justify-start items-center hover:bg-lightGray hover:text-gray-700 flex no-underline outline-none p-2.5 gap-3 text-xl font-semibold rounded-lg'}
                                >
                                    <LuHistory className={'h-7 w-[1.5rem]'} />
                                    <span className={'hidden md:block'}>Export history</span>
                                </NavigationMenu.Item>
                            </NavLink>
                        </NavigationMenu.List>
                    </div>
                </div>
                <div
                    className={'justify-start items-center hover:bg-lightGray hover:text-gray-700 flex no-underline outline-none p-2.5 gap-3 text-xl font-semibold rounded-lg cursor-pointer'}
                    onClick={handleLogout}
                >
                    <LuLogOut className={'h-7 w-[1.5rem]'} />
                    <span className={'hidden md:block'}>Log out</span>
                </div>
            </div>

            <NavigationMenu.Viewport />
        </NavigationMenu.Root>
    );
};

export default SideBar;
