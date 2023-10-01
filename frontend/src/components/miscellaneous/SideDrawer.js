import { Box, Button, Text, Tooltip } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SideDrawer = () => {
  const [ search, setSearch ] = useState('');
  const [ searchResult, setSearchResult ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ loadingChat, setLoadingChat ] = useState(false);
  return (
    <>
     <Box>
        <Tooltip label='Search Users to Chat ' hasArrow placement='bottom-end'>
          <Button variant='ghost'>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
            <Text display={{base:'none', md:'flex'}}>Search User</Text>
          </Button>
        </Tooltip>
      </Box> 
    </>
  );
}

export default SideDrawer;