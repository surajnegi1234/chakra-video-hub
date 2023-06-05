import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,

  VStack,
  HStack,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BiMenuAltLeft } from "react-icons/bi"
const Header = () => {
  // const{ } =useDiscloser()
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
      zIndex={'overlay'}
       pos={"fixed"}
        left={"4"}
        top={"4"}
        colorScheme={"purple"}
        p={"0"}
        h={"10"}
        w={"10"}
        borderRadius={"full"}
        onClick={onOpen}>
        <BiMenuAltLeft  size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement={"left"} onClose={onClose} >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            Video Hub</DrawerHeader>

          <DrawerBody>

            <VStack alignItems={'flex-start'}>

              <Button onClick={onclose} variant={'ghost'} colorScheme={'purple'}>
                <Link to={'/'}>Home</Link>
              </Button>

              <Button onClick={onclose} variant={'ghost'} colorScheme={'purple'}>
                <Link to={'/videos'}>Videos</Link>
              </Button>


              <Button onClick={onclose} variant={'ghost'} colorScheme={'purple'}>
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>


              <Button onClick={onclose} variant={'ghost'} colorScheme={'purple'}>
                <Link to={'/upload'}>Upload Video</Link>
              </Button>



            </VStack>


            <HStack pos={'absolute'} bottom={'10'} left={'0'} w={'full'} justifyContent={'space-evenly'} >
              <Button colorScheme={'purple'}>
                <Link to={'/login'}>
                  Log In
                </Link>
              </Button>


              <Button colorScheme={'purple'} variant={'outline'}>
                <Link to={'/signup'} >
                  Sign Up
                </Link>



              </Button>

            </HStack>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Header;