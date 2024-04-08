import React from 'react'
import * as Avatar from "@radix-ui/react-avatar";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {SearchBtn} from "./index.js";
const Header = () => {
    return (
        <div className='w-[calc(100%-220px)] justify-end bg-white self-center py-1 px-2 flex-1 top-0 right-0 pr-4 fixed '>
            <div className={'flex justify-between items-center rounded'}>
                <div className={'w-1/2 justify-start'}>
                <SearchBtn></SearchBtn>
                </div>


                <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                        <Avatar.Root className='inline-flex h-10 w-10 items-center overflow-hidden rounded-full align-middle cursor-pointer'>
                            <Avatar.Image className=' h-full w-full rounded-[inherit] object-cover'
                                          src='src/assets/snoopy.jpeg' alt='avatar'>
                            </Avatar.Image>
                        </Avatar.Root>
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Portal>

                        <DropdownMenu.Content
                            className="min-w-[220px] bg-white rounded-md p-[5px] focus:ring-transparent border border-gray-300 focus:border-gray-300 hover:border-gray-300 will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                            sideOffset={5}
                        >

                            <DropdownMenu.Label className=" leading-none  flex flex-col justify-center items-start  px-[5px] pl-[10px] relative select-none outline-none">
                                <div className={'text-sm font-semibold'}>shibapawpaw</div>
                                <div className={'text-xs text-gray-500 '}>shiba@group1.com</div>
                            </DropdownMenu.Label>

                            <DropdownMenu.Separator className="h-[1px] bg-gray-300 my-[5px]" />

                            <DropdownMenu.Item className="group text-sm leading-none  rounded-[3px] flex items-center  p-[5px] relative pl-[10px]  cursor-pointer hover:bg-lightGray hover:ring-transparent">
                                Edit profile
                            </DropdownMenu.Item>

                            <DropdownMenu.Item className="group text-sm leading-none  rounded-[3px] flex items-center p-[5px] relative pl-[10px]  cursor-pointer hover:bg-lightGray hover:ring-transparent">
                                Team
                            </DropdownMenu.Item>

                            <DropdownMenu.Separator className="h-[1px] bg-gray-300 my-[5px]" />

                            <DropdownMenu.Item className="group text-sm leading-none text-red-500 rounded-[3px] flex items-center  p-[5px] relative pl-[10px] ring-offset-transparent cursor-pointer hover:bg-lightGray hover:ring-transparent">
                                Log out
                            </DropdownMenu.Item>


                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>

        </div>
        </div>

    )
}
export default Header


