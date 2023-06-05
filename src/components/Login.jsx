import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Text } from '@chakra-ui/react'
const Login = () => {
  return (
    <container maxw={"container.xl"} h={"100vh"} p={"16"}>
         
<form>
  <VStack 
  alignItems={'stretch' }
   spacing={"8"}
  w={["full",'96']}   
    m={'auto'} 
    my={"16"}
    >
<Heading>
    Welcome Back
</Heading>
<Input  type={"email"} placeholder={"Email"} required focusBorderColor='purple.500'/>
<Input  type={"password"} placeholder={"password"} required focusBorderColor='purple.500'/>
  
  
  
  <Button variant={"link"} alignSelf={"flex-end"}>
    <Link to={"forgetpassword"}>Forget Password
    </Link></Button>
    <Button colorScheme={"purple"} type={"submit"}>
        Login
    </Button>
    <Text textAlign={"right"}>
        New User?
         
  <Button variant={"link"} alignSelf={"flex-end"}>
    <Link to={"signup"}>Signup
    </Link></Button>
    </Text>
   
   
    </VStack>

</form>



    </container>
  )
}

export default Login