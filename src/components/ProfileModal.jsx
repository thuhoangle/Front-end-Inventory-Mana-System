import React, { useRef, useState, useEffect } from 'react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton, useDisclosure, Input, Button,
} from '@chakra-ui/react';
import * as Avatar from "@radix-ui/react-avatar";
import { IoChevronDown } from "react-icons/io5";
import { GrStatusGoodSmall } from "react-icons/gr";

const ProfileModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const saveRef = useRef();

    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        role: 'Staff', // Assuming the role is static for now
        email: '',
        phone: '',
    });

    useEffect(() => {
        const firstName = localStorage.getItem('first_name');
        const lastName = localStorage.getItem('last_name');
        const email = localStorage.getItem('email');
        const phone = localStorage.getItem('phone_number');

        setProfile({
            firstName: firstName || '',
            lastName: lastName || '',
            role: 'Staff',
            email: email || '',
            phone: phone || '',
        });
    }, []);

    const handleSave = () => {
        // Save logic here if needed, currently just closing the modal
        onClose();
    };

    return (
        <>
            <button onClick={onOpen}>
                <Avatar.Root className='flex gap-2 pr-2 py-0.5 items-center overflow-hidden rounded-box align-middle cursor-pointer hover:bg-gray-200'>
                    <Avatar.Image className=' h-10 aspect-square rounded-full object-cover'
                        src='src/assets/snoopy.jpeg' alt='avatar'>
                    </Avatar.Image>
                    <div className={'hidden md:block text-sm font-semibold'}>{`${profile.firstName} ${profile.lastName}`}</div>
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
                        <AlertDialogCloseButton />
                        <AlertDialogBody>
                            <div className={'grid gap-4'}>
                                <div className={'grid grid-cols-4 items-center gap-4'}>
                                    <label htmlFor="name" className="text-right font-medium">
                                        Name
                                    </label>
                                    <Input
                                        className="shadow-sm col-span-3"
                                        id="name"
                                        placeholder={`${profile.firstName} ${profile.lastName}`}
                                        value={`${profile.firstName} ${profile.lastName}`}
                                        isReadOnly
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
                                        placeholder={profile.role}
                                        value={profile.role}
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
                                        placeholder={profile.email}
                                        value={profile.email}
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
                                        placeholder={profile.phone}
                                        value={profile.phone}
                                    />
                                </div>
                            </div>
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button colorScheme={'blue'} ref={saveRef} onClick={handleSave}>Save</Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
}

export default ProfileModal;
