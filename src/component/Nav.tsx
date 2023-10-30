import {
  Button,
  HStack,
  Image,
  Stack,
  useBoolean,
  useColorMode,
} from "@chakra-ui/react";
import logo from "../assets/Logo.svg";
import { MoonIcon,SunIcon } from "@chakra-ui/icons";

function Nav() {
  const { toggleColorMode } = useColorMode();
  const [flag, setFlag] = useBoolean();
  
  return (
    <>
      <Stack
        padding={".25rem"}
        justifyContent={"space-between"}
        paddingX={5}
        direction={"row"}
        align={"center"}
        gap={5}
      >
        <HStack gap={10}>
          <Image src={logo} w={"50px"} />

        </HStack>
        <HStack gap={10}>
          <HStack>
            <Button>My Works</Button>
            <Button>Experiance</Button>
            <Button>Education</Button>
            <Button>Contanct</Button>
          </HStack>
          <HStack>
            <Button onClick={() => {setFlag.toggle();toggleColorMode()}} >
              {flag?<MoonIcon />:<SunIcon />}
            </Button>
            <Button>Sponsor</Button>
          </HStack>
     
        </HStack>
      </Stack>
    </>
  );
}

export default Nav;
