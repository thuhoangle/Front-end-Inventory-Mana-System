import React, {useRef} from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton, useDisclosure, Input, Button,
} from '@chakra-ui/react'
import * as Avatar from "@radix-ui/react-avatar";
import {IoChevronDown} from "react-icons/io5";
import { GrStatusGoodSmall } from "react-icons/gr";


const ProfileModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const saveRef = useRef()
    return (
        <>
        <button onClick={onOpen}>
            <Avatar.Root className='flex gap-2 pr-2 py-0.5  items-center overflow-hidden rounded-box align-middle cursor-pointer hover:bg-gray-200'>
                <Avatar.Image className=' h-10 aspect-square rounded-full object-cover'
                              src='src/assets/snoopy.jpeg' alt='avatar'>
                </Avatar.Image>
                <div className={'hidden md:block text-sm font-semibold'}>shibapawpaw</div>
                <GrStatusGoodSmall className={'fill-green'} />
            </Avatar.Root>
        </button>

        <AlertDialog
                     motionPreset='slideInBottom'
                     leastDestructiveRef={saveRef}
                     onClose={onClose}
                     isOpen={isOpen}
                     isCentered
        >
            <AlertDialogOverlay>
            <AlertDialogContent>
                <AlertDialogHeader className={'font-bold text-xl'}>Edit profile</AlertDialogHeader>
                <AlertDialogCloseButton/>
                <AlertDialogBody>
                    <div className={'grid gap-4'}>
                    <div className={'grid grid-cols-4 items-center gap-4'}>
                        <label htmlFor="name" className="text-right font-medium">
                            Name
                        </label>
                        <Input
                            className="shadow-sm col-span-3"
                            id="name"
                            placeholder="shiba"
                        />
                    </div>
                    <div className={'grid grid-cols-4 items-center gap-4'}>
                        <label htmlFor="role" className="text-right font-medium">
                            Role
                        </label>
                        <Input
                            _placeholder={{ opacity: 1, color: 'black' }}
                            variant='unstyled'
                            isDisabled={true}
                            className="shadow-sm col-span-3"
                            id="role"
                            placeholder="Staff"
                        />
                    </div>
                    <div className={'grid grid-cols-4 items-center gap-4'}>
                        <label htmlFor="username" className="text-right font-medium">
                            Username
                        </label>
                        <Input
                            _placeholder={{ opacity: 1, color: 'black' }}
                            variant='unstyled'
                            isDisabled={true}
                            className="shadow-sm col-span-3"
                            id="username"
                            placeholder="shiba@gmail.com"
                        />
                    </div>
                    <div className={'grid grid-cols-4 items-center gap-4'}>
                        <label htmlFor="phone" className="text-right font-medium">
                            Phone number
                        </label>
                        <Input
                            _placeholder={{ opacity: 1, color: 'black' }}
                            variant='unstyled'
                            isDisabled={true}
                            className="shadow-sm col-span-3"
                            id="phone"
                            placeholder="090000"
                        />
                    </div>
                    </div>
                </AlertDialogBody>
                <AlertDialogFooter>
                    <Button colorScheme={'blue'} ref={saveRef} onClick={onClose}>Save</Button>
                </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
        </>
    )
}
export default ProfileModal
