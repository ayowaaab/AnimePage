import {
  Button,
  HStack,
  Image,
  Stack,
  useBoolean,
  useColorMode,
  Icon,
  Text,
  Link,
} from "@chakra-ui/react";
import logo from "../assets/Logo.svg";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

function Nav() {
  const { toggleColorMode } = useColorMode();
  const [flag, setFlag] = useBoolean();

  return (
    <>
      <Stack
        padding={"1rem"}
        justifyContent={"space-between"}
        paddingX={5}
        direction={"row"}
        align={"center"}
        gap={5}
      >
        <HStack gap={20}>
          <HStack>
            <Image src={logo} w={"50px"} />
            <Text fontSize={'2xl'} as={'b'} color={'teal.700'}>Hope</Text>
          </HStack>
          <HStack gap={5}>
            <Link opacity={'.5'} _hover={{opacity:'1'}} target="_blank" href='https://github.com/ayowaaab'><Icon cursor={"pointer"} as={FaGithub} boxSize={7} /></Link>
            <Link opacity={'.5'} _hover={{opacity:'1'}} target="_blank" href='https://www.facebook.com/ayoub.dahmen.87'><Icon cursor={"pointer"} as={FaFacebook} boxSize={7} /></Link>
            <Link opacity={'.5'} _hover={{opacity:'1'}} target="_blank" href='https://www.instagram.com/ayoub__dahmen/'><Icon cursor={"pointer"} as={FaInstagram} boxSize={7} /></Link>
          </HStack>
        </HStack>
        <HStack gap={10}>
          <HStack>
            <Button>My Works</Button>
            <Button>Experiance</Button>
            <Button>Education</Button>
            <Button>Contanct</Button>
          </HStack>
          <HStack>
            <Button
              onClick={() => {
                setFlag.toggle();
                toggleColorMode();
              }}
            >
              {flag ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Button>Sponsor ❤</Button>
          </HStack>
        </HStack>
      </Stack>
      <hr />
    </>
  );
}

export default Nav;
