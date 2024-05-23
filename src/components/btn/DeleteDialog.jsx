import React from 'react'
import { Button, AlertDialog, AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure
} from '@chakra-ui/react'
const DeleteDialog = ({onClick}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    // onClick để pass qua compo khác khi click
    const handleDeleteClick = () => {
        onClick()
    }

    const confirmDel = () => {
        handleDeleteClick();
        onClose()
    }

    return (
        <>
        <Button colorScheme='red' onClick={onOpen}>
            Delete
        </Button>
        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
        >
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize='xl' fontWeight='bold'>Delete</AlertDialogHeader>
                    <AlertDialogBody>Are you sure you want to delete?</AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='red' onClick={confirmDel} ml={3}>
                            Delete
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
</AlertDialog>
</>
    )
}
export default DeleteDialog
