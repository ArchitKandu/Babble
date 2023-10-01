import { Avatar, Box, Button, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, Tooltip } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { BellIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { useChatState } from '../../context/chatProvider';
import ProfileModals from './ProfileModals';
import { useHistory } from 'react-router-dom';

const SideDrawer = () => {
  const [ search, setSearch ] = useState('');
  const [ searchResult, setSearchResult ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ loadingChat, setLoadingChat ] = useState(false);

  const { user } = useChatState();
  const history = useHistory();

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    history.push('/');
  }

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
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
                  <Avatar size='sm' cursor='pointer' name={user.name} src={user.pic}/>
              </MenuButton>
              <MenuList>
                <ProfileModals user={user}>
                  <MenuItem>My Profile</MenuItem>
                </ProfileModals>
                <MenuDivider/>
                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Menu>
        </div>
      </Box> 
    </>
  );
}

export default SideDrawer;