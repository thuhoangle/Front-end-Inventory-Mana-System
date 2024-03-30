import React from 'react'
import * as Avatar from "@radix-ui/react-avatar";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {SearchBtn} from "./index.js";
const Head = () => {
    return (
        <div className='w-full bg-white self-center min-w-0 flex-1 '>
            <div className={'flex justify-between items-center mx-3.5 my-2'}>
                <div className={'w-1/2 justify-start'}>
                <SearchBtn></SearchBtn>
                </div>


                <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                        <Avatar.Root className='inline-flex h-10 w-10 items-center overflow-hidden rounded-full align-middle'>
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

// </div>
    )
}
export default Head




{/*<div className={'flex flex-row gap-5 py-2 '}>*/}
{/*    <form className={'self-center items-center '}>*/}
{/*        <div className={'relative flex-1 items-center w-full '}>*/}
{/*            <CiSearch className={'w-10 h-10 fill-graySearch absolute ps-3 '}/>*/}
{/*            <input type="search"*/}
{/*                   placeholder={'Search'}*/}
{/*                   autoComplete={'off'}*/}
{/*                   className={'px-3 py-2 ps-12 border-none text-gray-900 rounded-full ring-2 ring-gray-300 focus:ring-gray-300 focus:outline-none'}/>*/}
{/*        </div>*/}
{/*    </form>*/}
{/*    <SearchBtn width='200'/>*/}
{/*</div>*/}