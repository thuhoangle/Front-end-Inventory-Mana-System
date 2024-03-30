import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { RxDashboard } from "react-icons/rx";
import { BsBoxSeam, BsTruck, BsCart2, BsClipboard } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import * as Avatar from '@radix-ui/react-avatar';

function Menu() {
    return (
        <NavigationMenu.Root orientation='vertical'
                             className='h-screen bg-white px-2.5 pt-2 pb-2.5 border-l-2 '>

            <div className='flex flex-col gap-5'>
                <p className='font-black text-4xl self-center '>Group1</p>
                <NavigationMenu.Item
                    className='flex flex-row rounded-box gap-2.5 px-2.5 py-2.5 bg-lightBlue justify-start items-center'>
                    <Avatar.Root
                        className='inline-flex h-11 w-11 items-center overflow-hidden rounded-full align-middle'>
                        <Avatar.Image className=' h-full w-full rounded-[inherit] object-cover'
                                      src='src/assets/snoopy.jpeg' alt='avatar'>
                        </Avatar.Image>
                    </Avatar.Root>
                    <p className='font-semibold text-base'>shiba</p>
                </NavigationMenu.Item>
            </div>

            <div className='flex flex-col grow gap-4'>
                <NavigationMenu.List className={'grid list-none gap-1 py-2 mt-2.5 '}>
                        <NavigationMenu.Link
                            className={'justify-start items-center hover:bg-lightGray flex no-underline outline-none p-2.5 gap-4 text-xl font-semibold rounded-lg'}
                            href='./../pages/Dasboard.jsx'
                        >
                            <RxDashboard className={'h-6 w-6'}/>
                            Dashboard
                        </NavigationMenu.Link>

                        <NavigationMenu.Link
                            className={'justify-start items-center hover:bg-lightGray flex no-underline outline-none p-2.5 gap-4 text-xl font-semibold rounded-lg'}
                            href='./../pages/Inventory.jsx'
                        >
                            <BsBoxSeam className={'h-6 w-6'}/>
                            Inventory
                        </NavigationMenu.Link>

                        <NavigationMenu.Link
                            className={'justify-start items-center hover:bg-lightGray flex no-underline outline-none p-2.5 gap-4 text-xl font-semibold rounded-lg'}
                            href='./../pages/Supplier.jsx'
                        >
                            <BsTruck className={'h-6 w-6'}/>
                            Supplier
                        </NavigationMenu.Link>

                        <NavigationMenu.Link
                            className={'justify-start items-center hover:bg-lightGray flex no-underline outline-none p-2.5 gap-4 text-xl font-semibold rounded-lg'}
                            href=''
                        >
                            <BsCart2 className={'h-6 w-6'}/>
                            Product
                        </NavigationMenu.Link>

                        <NavigationMenu.Link
                            className={'justify-start items-center hover:bg-lightGray flex no-underline outline-none p-2.5 gap-4 text-xl font-semibold rounded-lg '}
                            href=''
                        >
                            <BsClipboard className={'h-6 w-6'}/>
                            Order
                        </NavigationMenu.Link>

                </NavigationMenu.List>


                {/*<NavigationMenu.Link*/}
                {/*    className={'justify-start items-center hover:bg-lightGray flex no-underline outline-none p-[10px] gap-[16px] text-[20px] font-semibold rounded-[8px]'}*/}
                {/*    href=''*/}
                {/*>*/}
                {/*    <IoIosLogOut className={'h-7 w-7'}/>*/}
                {/*    Log out*/}
                {/*</NavigationMenu.Link>*/}

            </div>
            <NavigationMenu.Viewport/>
        </NavigationMenu.Root>

    )
}

export default Menu
