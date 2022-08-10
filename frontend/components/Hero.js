import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Center
} from '@chakra-ui/react';

export default function Hero() {
  return (
    <Center minH='100vh'>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Meeting scheduling{' '}
          <Text as={'span'} color={'orange.400'}>
            made easy
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Never miss a meeting. Never be late for one too. Keep track of your
          meetings and receive smart reminders in appropriate times. Read your
          smart “Daily Agenda” every morning.
        </Text>
        <Button
          rounded={'full'}
          px={6}
          colorScheme={'orange'}
          bg={'orange.400'}
          _hover={{ bg: 'orange.500' }}>
          Get started
        </Button>
      </Stack>
    </Center>
  );
}