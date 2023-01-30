import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Icon,
  Text,
  useDisclosure,
  Button,
  Stack,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { GiTechnoHeart } from 'react-icons/gi';

const Navbar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const links = [
    { linkName: 'Products', path: '/products' },
    { linkName: 'ShoppingCart', path: '/cart' },
  ];

  const NavLink = ({ path, children }) => (
    <Link
      as={ReactLink}
      to={path}
      px={2}
      rounded="md"
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
    >
      {children}
    </Link>
  );

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack>
          <Link as={ReactLink} to="/">
            <Flex alignItems="center">
              <Icon as={GiTechnoHeart} h={6} w={6} color="orange.400" />
              &nbsp;&nbsp;
              <Text fontWeight="extrabold">Tech Eden</Text>
            </Flex>
          </Link>
          <HStack as='nav' spacing={4} display={{base:'none', md:'flex'}}>
            {links.map((link) => (
              <NavLink key={link.linkName} path={link.path}>
                {link.linkName}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems="center">
          {/* <NavLink> */}
          <Icon
            as={colorMode === 'light' ? MoonIcon : SunIcon}
            alignSelf="center"
            onClick={() => toggleColorMode()}
          />
          {/* </NavLink> */}
          <Button
            as={ReactLink}
            p={2}
            to="/login"
            fontSize="sm"
            fontWeight={400}
            variant="link"
          >
            Sign In
          </Button>
          <Button
            as={ReactLink}
            m={2}
            to="/register"
            fontSize="sm"
            display={{base:'none', md:'inline-flex'}}
            fontWeight={600}
            _hover={{ bg: 'orange.400' }}
            bg="orange.500"
            color="white"
          >
            Sign Up
          </Button>
        </Flex>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            {links.map((link) => (
              <NavLink key={link.linkName} path={link.path}>
                {link.linkName}
              </NavLink>
            ))}
            <NavLink path='/register'>Sign Up</NavLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
