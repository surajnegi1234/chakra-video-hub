// import { Box, color, Container, Img } from '@chakra-ui/react';
// import { Heading } from '@chakra-ui/react'
// import { Image} from '@chakra-ui/react'
// import { Text} from '@chakra-ui/react'
// import React from 'react'
// import { Carousel } from 'react-responsive-carousel'
// import "react-responsive-carousel/lib/styles/carousel.min.css"
// import img1 from "../assets/1.jpg";
// import img2 from "../assets/2.jpg";
// import img3 from "../assets/3.jpg";
// import img4 from "../assets/4.jpg";
// import img5 from "../assets/5.png";

// const headingoptions={
//     pos:"absolute",
//     left:"50% ",
//     top:"50%",
//     transform:"translate(-50%,-50%)",
//     texttransform:"uppercase",
//     p:"4",
//     size:"4 xl",

// }
// const Home = () => {
//   return (
// <Box>
//     <MyCarousel/>
//     <Container  maxw={'container.x1'}  minH={'100vh'} p={'16'}>
// <Heading texttransform={"uppercase "}  py="2" w={"fit-content"} borderBottom={"2px solid"} m={"auto"}>
//     services
// </Heading>
// <stack h="full"
//     p="4"
//     alignItems={"center"}
//     direction={["column","row"]}
    
//     >
//        <Img src ={ img5} h={["40","400"]} filter={"hue-rotate(-130deg)"}/>
//      <Text letterSpacing={"widest"} lineHeight="190%" p={["4","16"]}>
//      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//      </Text>
// </stack>
//     </Container  >
// </Box>
//   );

// };
// const MyCarousel =()=>
// (
//     <Carousel 
//     autoplay
//      infiniteLoop
//       interval={1000} 
//       showStatus={false }
//        showThumbs={false}
//      showArrows={false}
 
// >
//     <Box w = "full" h ={'100vh'} >
//      <Image src={img1}/> 
//        <Heading bgColor={'whiteAlpha.600'} color={"black"} {...headingoptions}> 
//        Welcome TO Future</Heading>
//     </Box>
//     <Box w = "full" h ={'100vh'}>
//         <Img src ={ img2}/>
//        <Heading bgColor={'whiteAlpha.900'} color={"black"}  {...headingoptions}> Future is Gaming</Heading>
//     </Box>
//     <Box w = "full" h ={'100vh'}>
//         <Img src ={ img3}/>
//        <Heading bgColor={'whiteAlpha.600'} color={"black"} {...headingoptions}>Gaming In console
//        </Heading>
//     </Box>
//     <Box w = "full" h ={'100vh'}>
//         <Img src ={ img4}/>
//        <Heading bgColor={'whiteAlpha.600'} color={"black"} {...headingoptions}>Night Life is Cool</Heading>
//     </Box>
    
// </Carousel>
// )




import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo
            tempora deleniti quod, est eos veniam autem asperiores rem, nam
            laudantium ut, similique ducimus amet sequi et voluptas iusto rerum
            at aliquid numquam corporis ipsa reprehenderit? Porro iusto magnam,
            sit vero deleniti, non nemo rem accusamus neque, quibusdam ab.
            Libero, reprehenderit recusandae labore eaque, aspernatur aliquid
            modi soluta ullam voluptatum unde repellat in molestias quod?
            Doloribus ratione illum quisquam earum consequuntur nam voluptatem,
            velit culpa maiores. Inventore esse illum excepturi dolores est
            natus aliquid maiores sunt omnis deserunt accusantium amet enim eos
            adipisci minima hic, nam provident quo aperiam quasi vel?
            Dignissimos accusantium aliquid aut vel explicabo voluptatum
            molestias fugit harum reprehenderit incidunt. Quis cumque explicabo
            omnis officiis autem dolorum!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night life is cool
      </Heading>
    </Box>
  </Carousel>
);
export default Home