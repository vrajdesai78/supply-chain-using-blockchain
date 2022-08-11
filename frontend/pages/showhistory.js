import { Button, Center, FormControl, FormLabel, Heading, HStack, Input, Stack, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function showhistory() {

    const [id, setId] = useState("");
    const [product, setProduct] = useState("");

    const getData = () => {
        fetch('https://api.jakartanet.tzkt.io/v1/contracts/KT1T96VuVwC36kYXNRKcijbxwFCpLFLKUhVd/storage')
            .then(res => res.json())
            .then(data => setProduct(data));
    }

    return (
        <Center minH={'80vh'}>
            <Stack>
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
                                    <Th isNumeric>Latitute</Th>
                                    <Th isNumeric>Longitude</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>2:00 PM</Td>
                                    <Td>mdescription</Td>
                                    <Td isNumeric>25.42340</Td>
                                    <Td isNumeric>25.4234</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Stack>
            </Stack>
        </Center>
    )
}
