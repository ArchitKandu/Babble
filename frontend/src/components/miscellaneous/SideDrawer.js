import { Box, Button, Menu, MenuButton, MenuList, Text, Tooltip } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { BellIcon } from '@chakra-ui/icons';

const SideDrawer = () => {
  const [ search, setSearch ] = useState('');
  const [ searchResult, setSearchResult ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ loadingChat, setLoadingChat ] = useState(false);
  return (
    <>
     <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      bg='white'
      w='100%'
      p='5px 10px 5px 10px'
      borderWidth='5px'
     >
        <Tooltip label='Search Users to Chat ' hasArrow placement='bottom-end'>
          <Button variant='ghost'>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
            <Text display={{base:'none', md:'flex'}} px='4'>Search User</Text>
          </Button>
        </Tooltip>
        <Text
          fontSize='2xl'
          fontFamily='monospace'
        >BABBLE</Text>
        <div>
          <Menu>
            <MenuButton p={1}>
              <BellIcon fontSize='2xl' m={1}/>
            </MenuButton>
            {/* <MenuList></MenuList> */}
          </Menu>
        </div>
      </Box> 
    </>
  );
}

export default SideDrawer;