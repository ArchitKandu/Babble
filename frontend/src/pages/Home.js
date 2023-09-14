import React from 'react';
import { Container, Box, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';
const Home = () => {
  return (
    <Container maxW='xl' centerContent>
      <Box
        d='flex'
        p={3}
        justifyContent={'center'}
        bg='white'
        w='100%'
        m='40px 0 15px 0'
        borderRadius='lg'
        borderWidth='1px'
        >
          <Text textAlign='center' fontSize='4xl' fontFamily='red hat display'>JUST-TALK</Text>
        </Box>
        <Box bg='white' w='100%' p={4} borderRadius='lg' borderWidth='1px' >
          <Tabs variant='soft-rounded'>
            <TabList mb='2em'>
              <Tab w='50%'>Log in</Tab>
              <Tab w='50%'>Sign up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login/>
              </TabPanel>
              <TabPanel>
                <Signup/>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
    </Container>
  )
}

export default Home