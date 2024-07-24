import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'} />

        <form>
          <HStack>
            <Input
            // this is input component from chakra ui
              required
              type={'file'}
              css={{
                // here we have created object for css
                '&::file-selector-button': {
                    // using pseudo selector 
                  border: 'none',
                  width: 'calc(100% + 36px)',
                  height: '100%',
                  marginLeft: '-18px',
                  color: 'purple',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                },
              }}
            />
            <Button colorScheme={'purple'} type={'submit'}>
              Upload
            </Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;
