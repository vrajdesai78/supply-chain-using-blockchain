import { Button, Center, FormControl, HStack, Input, Stack, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useState } from 'react';
import { useToast } from '@chakra-ui/react'

export default function showhistory() {

    const toast = useToast();
    const [id, setId] = useState("");
    const [product, setProduct] = useState("");
    const [status, setStatus] = useState("");

    console.log(product);

    const getData = () => {
        if (!id) {
            toast({
                title: 'Please enter an id',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        } else {
            fetch('https://api.jakartanet.tzkt.io/v1/contracts/KT1T96VuVwC36kYXNRKcijbxwFCpLFLKUhVd/storage')
                .then(res => res.json())
                .then(data => setProduct(data.productStatus[id]));
        }
    }

    return (
        <Center>
            <Stack mt='20'>
                <HStack>
                    <FormControl id="product-id">
                        <Input type="number" name='id' placeholder='Enter product id' onChange={(e) => setId(e.target.value)} />
                    </FormControl>
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}
                        onClick={getData}
                    >
                        Submit
                    </Button>
                </HStack>
                <Stack pt='20'>
                    <TableContainer>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Time</Th>
                                    <Th>Status description</Th>
                                    <Th isNumeric>Latitude</Th>
                                    <Th isNumeric>Longitude</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {product && product.map(el => {
                                    return (
                                        <Tr>
                                            <Td>{el.time}</Td>
                                            <Td>{el.statusDescription}</Td>
                                            <Td>{el.latitude}</Td>
                                            <Td>{el.longitude}</Td>
                                        </Tr>
                                    )
                                }
                                )}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Stack>
            </Stack>
        </Center>
    )
}
