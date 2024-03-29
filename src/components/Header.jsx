import React from 'react'
import { CiSearch } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import * as Avatar from "@radix-ui/react-avatar";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
const Header = () => {
    return (
        <div className=' w-screen bg-white items-center mx-auto  '>
            <div className={'flex flex-row justify-between mx-2'}>
            <p className='font-black text-[35px] self-center  px-6'>Group1</p>


            <div className={'flex flex-row justify-end gap-5 py-2 '}>
                <form className={'self-center '}>
                    <div className={'relative flex-1 items-center w-full'}>
                        <CiSearch className={'w-10 h-10 fill-graySearch absolute ps-3 '}/>
                        <input type="search"
                               placeholder={'Search'}
                               autoComplete={'off'}
                               className={'px-3 py-2 ps-12 border-none text-gray-900 rounded-[20px] ring-2 ring-gray-300 focus:ring-gray-300 focus:outline-none'}/>
                    </div>
                </form>

                <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                        <Avatar.Root className='inline-flex h-[45px] w-[45px] items-center overflow-hidden rounded-full align-middle'>
                            <Avatar.Image className=' h-full w-full rounded-[inherit] object-cover'
                                          src='src/assets/snoopy.jpeg' alt='avatar'>
                            </Avatar.Image>
                        </Avatar.Root>
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Portal>

                        <DropdownMenu.Content
                            className="min-w-[220px] bg-white rounded-md p-[5px]  will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
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
        </div>

// </div>
    )
}
export default Header


{/*<form className="w-full mx-auto focus:outline-none  ">*/
}
{/*    <div className="relative  items-center  focus:outline-none ">*/
}
{/*        <div className="absolute inset-y-0 start-0 flex flex-row items-center ps-3 pointer-events-none">*/
}
{/*            <CiSearch className={'w-8 h-8 fill-graySearch'}/>*/
}
{/*        </div>*/
}
{/*        <input type="search"*/
}
{/*               className=" block w-full px-3 py-2 font-[16px] ps-12 text-gray-900 border border-gray-300 rounded-[20px] bg-gray-50 focus-visible:outline-none  "*/
}
{/*               placeholder="Search" required/>*/
}
{/*        <button type="submit"*/
}
{/*                className="text-white  bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[15px] px-4 py-2 ">Search*/
}
{/*        </button>*/
}
{/*    </div>*/
}

{/*</form>*/
}



{/*<div className={'dropdown dropdown-bottom dropdown-end '}>*/}
{/*    <div tabIndex={0} role="button">*/}
{/*        <Avatar.Root*/}
{/*            className='inline-flex h-[45px] w-[45px] items-center overflow-hidden rounded-full align-middle'>*/}
{/*            <Avatar.Image className=' h-full w-full rounded-[inherit] object-cover'*/}
{/*                          src='src/assets/snoopy.jpeg' alt='avatar'>*/}
{/*            </Avatar.Image>*/}
{/*        </Avatar.Root>*/}
{/*    </div>*/}



{/*<ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-white rounded-b-lg w-52 mt-2">*/}
{/*    <li>*/}
{/*        <div className={'font-medium'}>*/}
{/*            <div>shibapawpaw</div>*/}
{/*            <div className={'text-sm text-gray-500 '}>shiba@group1.com</div>*/}
{/*            <div>*/}
{/*                <hr/>*/}
{/*            </div>*/}
{/*        </div>*/}
{/*    </li>*/}
{/*    <li><a>Edit profile</a></li>*/}
{/*    <li><a>Log out</a></li>*/}

{/*</ul>*/}