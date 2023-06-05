

import { Avatar, Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Text } from '@chakra-ui/react'
const Signup = () => {
  return (
    <container maxw={"container.xl"} h={"100vh"} p={"16"}>
         
<form>
  <VStack 
  alignItems={'stretch' }
   spacing={"8"}
  w=
 {["full",'96']}   
    m={'auto'} 
    my={"16"}
    >
<Heading  alignSelf={"center"}>
 VIDEO HUB
</Heading>
<Avatar alignSelf={"center"} boxSize={"32"} />
<Input  type={"text"} placeholder={"Name"} required focusBorderColor='purple.500'/>

<Input  type={"email"} placeholder={"Email"} required focusBorderColor='purple.500'/>
<Input  type={"password"} placeholder={"password"} required focusBorderColor='purple.500'/>
  
  
  
 
    <Button colorScheme={"purple"} type={"submit"}>
     Signup
    </Button>
    <Text textAlign={"right"}>
    Already Signed up?
         
  <Button variant={"link"} alignSelf={"flex-end"}>
    <Link to={"login"}>Login
    </Link></Button>
    </Text>
   
   
    </VStack>

</form>



    </container>
  )
}



export default Signup;