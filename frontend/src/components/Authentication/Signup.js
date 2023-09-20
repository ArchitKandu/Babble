import { FormControl, FormLabel , Input, InputGroup, InputRightElement, VStack, Button } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

const Signup = () => {
    const [name, setName]=useState();
    const [email, setEmail]=useState();
    const [password, setPassword]=useState();
    const [pshow, setPShow]=useState(false);
    const [confirmPassword, setConfirmPassword]=useState();
    const [cshow, setCShow]=useState(false);
    const [pic, setPic]=useState();
    const [loading, setLoading]=useState(false);
    const toast = useToast();

    const handlePShow = ()=>setPShow(!pshow);
    const handleCShow = ()=>setCShow(!cshow);

    const postDetails = (pics) =>{
        setLoading(true);
        console.log(pics);
        if(pics===undefined){
            toast({
                title: 'Please select an Image!',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: 'bottom'
            });
            return;
        };
        if(pics.type==='image/jpeg' || pics.type==='image/png'){
            const data = new FormData();
            data.append('file',pics);
            data.append('upload_preset','chat-app');
            data.append('cloud_name','babble');
            console.log(data);
            fetch('https://api.cloudinary.com/v1_1/babble/upload',{
                method:'POST',
                body:data
            })
            .then((res)=>res.json())
            .then((data)=>{
                setPic(data['url'].toString());
                setLoading(false);
            })
            .catch((err)=>{
                console.log(err);
                setLoading(false);
            });
        }else{
            toast({
                title: 'Please select an Image!',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: 'bottom'
            });
            return;
        };
    };
    const handleSignUp = () =>{};

    const show=<FontAwesomeIcon icon={faEye}/>
    const hide=<FontAwesomeIcon icon={faEyeSlash}/>

    return (
        <VStack>
        <FormControl id='name' isRequired>
            <FormLabel>Name</FormLabel>
            <Input
                placeholder='Enter Your Name'
                onChange={(e)=>setName(e.target.value)}
            />
        </FormControl>


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
                <InputRightElement width='4.5rem' onClick={handlePShow}>
                    <div className="icons" onClick={handlePShow}>{pshow?hide:show}</div>
                </InputRightElement>
            </InputGroup>
        </FormControl>


        <FormControl id='confirmPassword' isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
                <Input
                    type={cshow?'text':'password'}
                    placeholder='Enter Your Password'
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                />
                <InputRightElement width='4.5rem'>
                    <div className="icons" onClick={handleCShow}>{cshow?hide:show}</div>
                </InputRightElement>
            </InputGroup>
        </FormControl>


        <FormControl id='picture'>
            <FormLabel>Input Your Image</FormLabel>
            <Input
                type='file'
                accept="image/jpeg, image/png"
                p={1.5}
                onChange={(e)=>postDetails(e.target.value[0])}
            />
        </FormControl>


        <Button
            colorScheme='twitter'
            width='100%'
            style={{ marginTop: 15 }}
            onClick={handleSignUp}
            isLoading={loading}
        >
            Sign Up
        </Button>

        </VStack>
    );
}

export default Signup;
