import React from 'react'
import {Drawer,DrawerOverlay,DrawerContent,Button, useDisclosure,DrawerHeader,DrawerCloseButton, DrawerBody, Stack, VStack, HStack} from "@chakra-ui/react"
// DrawerBody,
// import {Link} from 'react-router-dom'
import {BiMenuAltLeft, BiMenuAltRight} from 'react-icons/bi'
import { Link } from 'react-router-dom'
const Header = () => {
    const {isOpen,onOpen,onClose} = useDisclosure()
    // onClose
    // in the above line we have used react hook -> anything that starts with use is a hook 
  return (
    <>
        <Button 
        zIndex={'overlay'}
        pos={'fixed'} 
        top={'4'} 
        left={'4'} 
        colorScheme='purple' 
        p={'0'} 
        h={'10'} 
        w={'10'}
        borderRadius={'full'}
        onClick={onOpen}>
            <BiMenuAltLeft size={'20'}/>
            {/* It simply designs the lines appearing on the buttons */}
        </Button>

        <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
          <DrawerOverlay/>
          {/* drawer overlay is self closing tag */}
          <DrawerContent>
            <DrawerCloseButton/>
            <DrawerHeader fontSize={'25'}>VIDEO HUB</DrawerHeader>
            <DrawerBody>
                <VStack alignItems={'flex-start'}>
                    <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                        <Link to={'/'}>Home</Link>
                    </Button>
                    <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                        <Link to={'/videos'}>Videos</Link>
                    </Button>
                    <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                        <Link to={'/videos?category=free'}>Free Videos</Link>
                    </Button>
                    <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                        <Link to={'/Upload'}>Upload Videos</Link>
                    </Button>
                </VStack>
                <HStack position={'absolute'} 
                bottom={'10'} 
                left={'0'} 
                w={'full'} 
                justifyContent={'space-evenly'}>
                    {/* by default direction is row and can't be changes */}
                    <Button onClick={onClose} colorScheme='purple'>
                        <Link to={'/login'}>Log In</Link>
                    </Button>
                    <Button onClick={onClose} colorScheme='purple' variant={'outline'}>
                        <Link to={'/signup'}>Sign Up</Link>
                    </Button>
                </HStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
    </>
  )
}

export default Header