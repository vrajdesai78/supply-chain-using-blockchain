import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function AddProduct() {
    const [data, setData] = useState("");

    const handleData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const sendData = () => {
        fetch('https://api.jakartanet.tzkt.io/v1/contracts/KT1T96VuVwC36kYXNRKcijbxwFCpLFLKUhVd/storage').then(res => res.json()).then(pro => console.log(pro))
        // fetch("https://api.jakartanet.tzkt.io/v1/contracts/KT1T96VuVwC36kYXNRKcijbxwFCpLFLKUhVd/storage", {
        //     mode: "no-cors",
        //     method: "POST",
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // }).then(res => {
        //     console.log(res);
        // });
    }

    return (
        <Flex
            minH={'80vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} w={['xs', 'sm']}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Add product</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool features ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="name">
                            <FormLabel>Product Name</FormLabel>
                            <Input type="text" name='name' onChange={handleData} />
                        </FormControl>
                        <FormControl id="product-id">
                            <FormLabel>Product Id</FormLabel>
                            <Input type="number" name='id' onChange={handleData} />
                        </FormControl>
                        <FormControl id="quantity">
                            <FormLabel>Quantity Of Product</FormLabel>
                            <Input type="number" name='quantity' onChange={handleData} />
                        </FormControl>
                        <FormControl id="discription">
                            <FormLabel>Description Of Product</FormLabel>
                            <Textarea name='discription' onChange={handleData}></Textarea>
                        </FormControl>
                        <Button
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}
                            onClick={sendData}
                        >
                            Submit
                        </Button>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}