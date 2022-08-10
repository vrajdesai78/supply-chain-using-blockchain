import {
    Box,
    Flex,
    Button,
    useColorModeValue,
    HStack,
    Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router'

export default function Navbar() {

    const router = useRouter();

    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Box>SupplyChain</Box>
                <HStack alignItems='center'>
                    <Text px='4' fontWeight='500' onClick={() => router.push('/')} cursor='pointer'>Home</Text>
                    <Text px='4' fontWeight='500' onClick={() => router.push('/addproduct')} cursor='pointer'>Add Product</Text>
                    <Text px='4' fontWeight='500' onClick={() => router.push('/updateproduct')} cursor='pointer'>Update Product</Text>
                    <Text px='4' fontWeight='500' onClick={() => router.push('/showhistory')} cursor='pointer'>Show History</Text>
                </HStack>
                <Button>
                    Connect To Wallet
                </Button>
            </Flex>
        </Box>
    );
}