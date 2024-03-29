import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { RxDashboard } from "react-icons/rx";
import { BsBoxSeam, BsTruck, BsCart2, BsClipboard } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import * as Avatar from '@radix-ui/react-avatar';

function Menu() {
    return (
        <NavigationMenu.Root orientation='vertical'
                             className=' w-fit lg:w-[220px] h-screen bg-white flex flex-col px-[10px] pt-[30px] pb-[10px] static'>

            <div className='flex flex-col gap-[10px]'>
                {/*<p className='font-black text-[35px] self-center'>Group1</p>*/}
                <NavigationMenu.Item
                    className='flex flex-row rounded-[15px] gap-[10px] px-[10px] py-[10px] bg-lightBlue justify-start items-center'>
                    <Avatar.Root
                        className='inline-flex h-[45px] w-[45px] items-center overflow-hidden rounded-full align-middle'>
                        <Avatar.Image className=' h-full w-full rounded-[inherit] object-cover'
                                      src='src/assets/snoopy.jpeg' alt='avatar'>
                        </Avatar.Image>
                    </Avatar.Root>
                    <p className='font-semibold text-[18px]'>shiba pawpaw</p>
                </NavigationMenu.Item>
            </div>

            <div className='flex flex-col grow gap-[15px]'>
                <NavigationMenu.List className={'grid list-none  gap-[10px] py-[10px] mt-[10px] '}>

                        <NavigationMenu.Link
                            className={'justify-start items-center hover:bg-lightGray flex no-underline outline-none p-[10px] gap-[16px] text-[20px] font-semibold rounded-[8px]'}
                            href='./../pages/Dasboard.jsx'
                        >
                            <RxDashboard className={'h-6 w-6'}/>
                            Dashboard
                        </NavigationMenu.Link>

                        <NavigationMenu.Link
                            className={'justify-start items-center hover:bg-lightGray flex no-underline outline-none p-[10px] gap-[16px] text-[20px] font-semibold rounded-[8px]'}
                            href='./../pages/Inventory.jsx'
                        >
                            <BsBoxSeam className={'h-6 w-6'}/>
                            Inventory
                        </NavigationMenu.Link>

                        <NavigationMenu.Link
                            className={'justify-start items-center hover:bg-lightGray flex no-underline outline-none p-[10px] gap-[16px] text-[20px] font-semibold rounded-[8px]'}
                            href='./../pages/Supplier.jsx'
                        >
                            <BsTruck className={'h-6 w-6'}/>
                            Supplier
                        </NavigationMenu.Link>

                        <NavigationMenu.Link
                            className={'justify-start items-center hover:bg-lightGray flex no-underline outline-none p-[10px] gap-[16px] text-[20px] font-semibold rounded-[8px]'}
                            href=''
                        >
                            <BsCart2 className={'h-6 w-6'}/>
                            Product
                        </NavigationMenu.Link>

                        <NavigationMenu.Link
                            className={'justify-start items-center hover:bg-lightGray flex no-underline outline-none p-[10px] gap-[16px] text-[20px] font-semibold rounded-[8px]'}
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
