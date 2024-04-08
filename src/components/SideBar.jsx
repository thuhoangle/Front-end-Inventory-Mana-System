import { NavLink } from 'react-router-dom';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import {BsBoxSeam, BsCart2, BsClipboard, BsTruck} from "react-icons/bs";
import {RxDashboard} from "react-icons/rx";
import * as Avatar from "@radix-ui/react-avatar";

const SideBar = () => {
    const active = 'text-blue bg-lightBlue ';
    const normal = '';

    return (
        <NavigationMenu.Root orientation='vertical'
                            className='w-[220px] h-screen  bg-white px-2.5 pt-2 pb-2.5 border-l-2 '>

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
                    <span className='font-semibold text-xl '>shiba</span>
                </NavigationMenu.Item>
            </div>

            <div className='flex flex-col grow gap-4'>
                <NavigationMenu.List className={'list-none gap-1 py-2 mt-2.5 '}>

                    <NavLink to={'/'}  className={({ isActive}) => (isActive ? active : normal )}>
                    <NavigationMenu.Item
                        className={'justify-start items-center hover:bg-lightGray hover:text-gray-700 flex no-underline outline-none p-2.5 gap-4 text-xl font-semibold rounded-lg'}
                    >
                        <RxDashboard className={'h-6 w-6'}/>
                        Dashboard
                    </NavigationMenu.Item>
                    </NavLink>

                    <NavLink to={'/inventory'}  className={({ isActive}) => (isActive ? active : normal )}>
                        <NavigationMenu.Item
                            className={'justify-start items-center hover:bg-lightGray hover:text-gray-700  flex no-underline outline-none p-2.5 gap-4 text-xl font-semibold rounded-lg active:bg-lightBlue'}
                        >
                                <BsBoxSeam className={'h-6 w-6'}/>
                                Inventory
                        </NavigationMenu.Item>
                    </NavLink>

                    <NavLink to={'/supplier'}  className={({ isActive}) => (isActive ? active : normal )}>
                        <NavigationMenu.Item
                            className={'justify-start items-center hover:bg-lightGray hover:text-gray-700  flex no-underline outline-none p-2.5 gap-4 text-xl font-semibold rounded-lg'}
                        >

                                <BsTruck className={'h-6 w-6'}/>
                                Supplier
                        </NavigationMenu.Item>
                    </NavLink>

                    <NavLink to={'/product'}  className={({ isActive}) => (isActive ? active : normal )}>
                            <NavigationMenu.Item
                                className={'justify-start items-center hover:bg-lightGray hover:text-gray-700  flex no-underline outline-none p-2.5 gap-4 text-xl font-semibold rounded-lg'}
                            >
                                    <BsCart2 className={'h-6 w-6'}/>
                                    Product
                            </NavigationMenu.Item>
                    </NavLink>

                    <NavLink to={'/order'}  className={({ isActive}) => (isActive ? active : normal )}>
                                <NavigationMenu.Item
                                    className={'justify-start items-center hover:bg-lightGray hover:text-gray-700  flex no-underline outline-none p-2.5 gap-4 text-xl font-semibold rounded-lg'}
                                >
                                        <BsClipboard className={'h-6 w-6'}/>
                                        Order
                                </NavigationMenu.Item>
                    </NavLink>
                </NavigationMenu.List>


            </div>
            <NavigationMenu.Viewport/>
        </NavigationMenu.Root>

    )
}
export default SideBar
