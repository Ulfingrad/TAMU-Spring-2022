import { NextPage } from 'next';

import { Button, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import {
  Badge,
  Center,
  Flex,
  Image,
  Link,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

import { MarketingLayout } from '../../components/Layout';

import links from './links.json';

const Recommendations: NextPage = () => {
  return (
    <MarketingLayout>

      <CircularProgress isIndeterminate color='green.300' />

      <VStack alignItems="center" paddingY={32} spacing={8}>
        <Heading size="4xl" textAlign="center" lineHeight="1.4">
          The Web App Template of the recommendations list
        </Heading>
        <Text textAlign="center" maxWidth="60ch" fontSize="2xl" lineHeight="2">
          You&apos;ve got a production ready React.js frontend (with Dark Mode) and Express.js
          backend. It is written in Typescript and has 100% test coverage.
          <br />
          Now go build something cool!
        </Text>

        <ol>
          {Object.entries(links).map((value, index) => {
            return <li key={index}>{value[1].link}</li>;
          })}
        </ol>

        <ol>
          {Object.entries(links).map((value, index) => {
            return <li key={index}>
              <Center py={6}>
                <Stack
                  borderWidth="1px"
                  borderRadius="lg"
                  w={{ sm: '100%', md: '540px' }}
                  height={{ sm: '476px', md: '20rem' }}
                  direction={{ base: 'column', md: 'row' }}
                  bg={useColorModeValue('white', 'gray.900')}
                  boxShadow={'2xl'}
                  padding={4}>
                  <Flex flex={1} bg="blue.200">
                    <Image
                      objectFit="cover"
                      boxSize="100%"
                      src={
                        'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                      }
                    />
                  </Flex>
                  <Stack flex={1} flexDirection="column" justifyContent="center" alignItems="center" p={1} pt={2}>
                    <Heading fontSize={'2xl'} fontFamily={'body'}>
                      Flight destination holder
                    </Heading>
                    <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                      Time period holder
                    </Text>
                    <Text textAlign={'center'} color={useColorModeValue('gray.700', 'gray.400')} px={3}>
                      More flight description holder 
                      <Link href={'#'} color={'blue.400'}>
                        Link example: {value[1].link}
                      </Link>
                      example
                    </Text>
                    <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                      <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>
                        #art
                      </Badge>
                      <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}> 
                        #photography 
                      </Badge>
                      <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>
                        #music
                      </Badge>
                    </Stack>
      
                    <Stack width={'100%'} mt={'2rem'} direction={'row'} padding={2} justifyContent={'space-between'} alignItems={'center'}>
                      <Button flex={1} fontSize={'sm'} rounded={'full'}
                        _focus={{
                          bg: 'gray.200',
                        }}>
                        Message
                      </Button>
                      <Button flex={1} fontSize={'sm'} rounded={'full'} bg={'blue.400'} color={'white'}
                        boxShadow={
                          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        _hover={{
                          bg: 'blue.500',
                        }}
                        _focus={{
                          bg: 'blue.500',
                        }}>
                        Follow
                      </Button>
                    </Stack>
                  </Stack>
                </Stack>
              </Center>
          </li>;
          })}
        </ol>

        <Center py={6}>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: '100%', md: '540px' }}
            height={{ sm: '476px', md: '20rem' }}
            direction={{ base: 'column', md: 'row' }}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            padding={4}>
            <Flex flex={1} bg="blue.200">
              <Image
                objectFit="cover"
                boxSize="100%"
                src={
                  'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                }
              />
            </Flex>
            <Stack flex={1} flexDirection="column" justifyContent="center" alignItems="center" p={1} pt={2}>
              <Heading fontSize={'2xl'} fontFamily={'body'}>
                Flight destination holder
              </Heading>
              <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                Time period holder
              </Text>
              <Text textAlign={'center'} color={useColorModeValue('gray.700', 'gray.400')} px={3}>
                More flight description holder 
                <Link href={'#'} color={'blue.400'}>
                  #tag
                </Link>
                 example
              </Text>
              <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>
                  #art
                </Badge>
                <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}> 
                  #photography 
                </Badge>
                <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>
                  #music
                </Badge>
              </Stack>

              <Stack width={'100%'} mt={'2rem'} direction={'row'} padding={2} justifyContent={'space-between'} alignItems={'center'}>
                <Button flex={1} fontSize={'sm'} rounded={'full'}
                  _focus={{
                    bg: 'gray.200',
                  }}>
                  Message
                </Button>
                <Button flex={1} fontSize={'sm'} rounded={'full'} bg={'blue.400'} color={'white'}
                  boxShadow={
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                  }
                  _hover={{
                    bg: 'blue.500',
                  }}
                  _focus={{
                    bg: 'blue.500',
                  }}>
                  Follow
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Center>


        <HStack spacing={8}>
          <Button as="a" size="lg" colorScheme="blue" href="https://nextjs.org/" target="_blank">
            Next.js
          </Button>
          <Button as="a" size="lg" colorScheme="gray" href="https://chakra-ui.com/" target="_blank">
            Chakra UI
          </Button>
        </HStack>
      </VStack>
    </MarketingLayout>
  );
};

export default Recommendations;
export { getServerSideProps } from '../../components/Chakra';