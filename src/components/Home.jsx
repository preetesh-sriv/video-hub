import { Box, Container, Heading, Image,Stack,Text} from '@chakra-ui/react'
import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"
import { transform } from 'framer-motion'

const headingOptions = {
    // 
    pos:"absolute",
    left:"50%",
    top:"10%",
    transform:"translate(-50%,-50%)",
    textTransform:"uppercase",
    p:"4",
    size:"4xl",
};
const Home = () => {
  return (
    <Box>
        {/* Note: Box is like div for chakra ui */}
         <MyCarousel/>
         <Container maxW={'container.xl'} minH={'100vh'}  p={'16'}>

         {/* to verify the width and height you can initially keep bgColor to test */}
        <Heading textTransform={'uppercase'} m='auto' py={'2'} w={'fit-content'} borderBottom={'2px solid'}> Services</Heading>
        {/* Note: m='auto'  is used in place of justify-content: centre since we have shortened the width*/}

          <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column','row']}
          >
        <Image src={img5} h={['40','400']}filter={'hue-rotate(130deg)'}/>
        <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis odio non molestiae error nulla qui distinctio. Eius iste, dolor modi cupiditate distinctio exercitationem ea provident, ad porro voluptate nobis temporibus consectetur, natus quisquam libero consequatur enim! Est labore tempore quae, dolorem veniam sequi dolores eius ducimus molestias maiores soluta iure, quam nemo at, quidem ipsum dolore. Placeat quis architecto delectus deleniti hic reprehenderit praesentium dolorum ea? Illo, officia culpa assumenda error aliquid doloribus iusto perspiciatis odio rem doloremque. Et, id laborum consequatur nihil rem labore magnam deleniti odio, repellendus numquam amet sint ducimus? Magni, dignissimos provident iure repellat cum expedita?
        </Text>
          </Stack>
         </Container>
    </Box>
  );
}
const MyCarousel = ()=>(
    // Note: Here we have used arrow function without return statement that is why we have used () in place of {} to return directly
    <Carousel 
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
    >
        <Box w={'full'} h={'100vh'}>
         <Image src={img1}/>
         {/* this Image is imported from chakra-ui */}
         <Heading bgColor={'black'} color={'white'} {...headingOptions}>Watch The Future</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
         <Image src={img2}/>
         <Heading bgColor={'white'} color={'black'} {...headingOptions}>Future is Gaming</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
         <Image src={img3}/>
         <Heading bgColor={'white'} color={'black'} {...headingOptions}>Gaming on Console</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
         <Image src={img4}/>
         <Heading bgColor={'white'} color={'black'} {...headingOptions}>Augmented Reality</Heading>
        </Box>
    </Carousel>
  );

export default Home;
