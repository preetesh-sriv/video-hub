import React from 'react'
import {Box, Stack, VStack,Heading, HStack,Button,Input,Text} from '@chakra-ui/react'
// NOTE: Maybe due to version issue I needed to import all these components here
import {AiOutlineSend,AiFillYoutube, AiFillInstagram, AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={'black'} minH={'40'} p={'16'} color={'white'}>
     <Stack direction={['column','row']}>
     {/* NOTE:
     direction={['column','row']}: This is a prop passed to the Stack component. 
     In Chakra UI, the direction prop determines the direction in which the children of the stack are laid out. 
     It accepts an array of two values: the direction for the default layout and the direction for the layout when the screen size matches the breakpoints defined in Chakra UI's responsive design system.
     In this case, ['column', 'row'] means that by default, the children will be stacked vertically (in a column layout). 
     However, when the screen size matches the breakpoint defined by Chakra UI, the layout will switch to horizontal (in a row layout).
      */}
     <VStack
     alignItems={'stretch'}
     w={'full'}
     px={'4'}>
        <Heading size='md' textTransform={'uppercase'} textAlign={'center'}>
          Subscribe to get updates
        </Heading>
        <HStack
        borderBottom={'2px solid white'}
        py={'2'}>{/* py = padding y */ }
            <Input placeholder='Enter the email here...'
                border={'none'}
                borderRadius={'none'}
                outline={'none'}
                focusBorderColor='none'
            />
            <Button
            p={'0'}
            colorScheme={'purple'}
            variant={'ghost'}
            borderRadius={'0 20px 20px 0'}
            border>
                <AiOutlineSend/>
            </Button>
        </HStack>
     </VStack>

     <VStack 
     w={'full'}
     borderLeft={['none','1px solid white']}
     borderRight={['none','1px solid white']}>
     
     <Heading textTransform={'uppercase'} textAlign={'center'}>
        VIDEO HUB
     </Heading>
     <Text>All rights reserved</Text>
     </VStack>

     <VStack w={'full'}>
      <Heading size={'md'} textTransform={'uppercase'}>
        Social media
      </Heading>
      <Button variant={'link'} colorScheme={'white'}>
      <a target='blank' href="https://www.youtube.com/" > <AiFillYoutube/> </a>
      </Button>
      <Button variant={'link'} colorScheme={'white'}>
      <a target='blank' href="https://www.instagram.com/" > <AiFillInstagram/> </a>
      </Button>
      <Button variant={'link'} colorScheme={'white'}>
      <a target='blank' href="https://twitter.com/" > <AiFillTwitterCircle/> </a>
      {/* NOTE:
      target='blank' opens in new tab */}
      </Button>
     </VStack>
     </Stack>
    </Box>
  )
}

export default Footer