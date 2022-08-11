import {
    Box,
    Flex,
    Button,
    useColorModeValue,
    HStack,
    Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import {
    connectWallet,
    getActiveAccount,
    disconnectWallet,
} from '../utils/wallet';

export default function Navbar() {

    const router = useRouter();

    const [wallet, setWallet] = useState(null);

    const handleConnectWallet = async () => {
        const { wallet } = await connectWallet();
        setWallet(wallet);
    };
    const handleDisconnectWallet = async () => {
        const { wallet } = await disconnectWallet();
        setWallet(wallet);
    };

    useEffect(() => {
        const getAccount = async () => {
            const account = await getActiveAccount();
            if (account) {
                setWallet(account.address);
            }
        };
        getAccount();
    }, []);

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
                <Button onClick={wallet ? handleDisconnectWallet : handleConnectWallet}>
                    {wallet
                        ? wallet.slice(0, 4) +
                        "..." +
                        wallet.slice(wallet.length - 4, wallet.length)
                        : "Connect"}
                </Button>
            </Flex>
        </Box>
    );
}