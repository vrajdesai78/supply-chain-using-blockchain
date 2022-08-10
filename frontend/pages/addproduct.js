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

export default function AddProduct() {
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} w={['xs','sm']}>
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
                            <Input type="text" />
                        </FormControl>
                        <FormControl id="product-id">
                            <FormLabel>Product Id</FormLabel>
                            <Input type="number" />
                        </FormControl>
                        <FormControl id="quantity">
                            <FormLabel>Quantity Of Product</FormLabel>
                            <Input type="number" />
                        </FormControl>
                        <FormControl id="discription">
                            <FormLabel>Description Of Product</FormLabel>
                            <Textarea></Textarea>
                        </FormControl>
                        <Button
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}>
                            Submit
                        </Button>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}