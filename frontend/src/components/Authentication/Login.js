import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail]=useState();
    const [password, setPassword]=useState();
    const [pshow, setPShow]=useState(false);

    const handlePShow = ()=>setPShow(!pshow);
    const handleLogIn = () =>{};

    const show=<FontAwesomeIcon icon={faEye}/>
    const hide=<FontAwesomeIcon icon={faEyeSlash}/>

    return (
        <VStack>
        <FormControl id='email' isRequired>
            <FormLabel>Email</FormLabel>
            <Input
                placeholder='Enter Your Email'
                onChange={(e)=>setEmail(e.target.value)}
            />
        </FormControl>


        <FormControl id='password' isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
                <Input
                    type={pshow?'text':'password'}
                    placeholder='Enter Your Password'
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <InputRightElement width='4.5rem'>
                    <div className="icons" onClick={handlePShow}>{pshow?hide:show}</div>
                </InputRightElement>
            </InputGroup>
        </FormControl>


        <Button
            colorScheme='twitter'
            width='100%'
            style={{ marginTop: 15 }}
            onClick={handleLogIn}
        >
            Log In
        </Button>


        <Button
            colorScheme='teal'
            width='100%'
            variant='solid'
            onClick={() =>{
                setEmail('guest@example.com');
                setPassword('123456');
            }}
        >
            Get Guest Credentials
        </Button>
    </VStack>
)};

export default Login
