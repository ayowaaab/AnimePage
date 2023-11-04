import {
  Button,
  HStack,
  Image,
  Stack,
  useColorMode,
  Icon,
  Text,
  Link,
  Divider,
  Show,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  VStack,
  DrawerCloseButton,
} from "@chakra-ui/react";
import logo from "../../assets/Logo.svg";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import Contact from "./Contact";
import { HamburgerIcon } from "@chakra-ui/icons";

function Nav() {
  const { toggleColorMode, colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Show above="md">
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
              <Image
                filter={
                  colorMode === "dark"
                    ? "invert(40%) sepia(61%) saturate(2269%) hue-rotate(165deg) brightness(101%) contrast(101%)"
                    : ""
                }
                src={logo}
                w={"50px"}
              />
              <Text
                fontSize={"2xl"}
                as={"b"}
                color={colorMode === "dark" ? "cyan.400" : "green.700"}
              >
                Hope
              </Text>
            </HStack>
            <HStack gap={{ base: 5, md: 7, xl: 10 }}>
              <Link
                opacity={".5"}
                _hover={{ opacity: "1" }}
                target="_blank"
                href="https://github.com/ayowaaab"
              >
                <Icon cursor={"pointer"} as={FaGithub} boxSize={7} />
              </Link>
              <Link
                opacity={".5"}
                _hover={{ opacity: "1" }}
                target="_blank"
                href="https://www.facebook.com/ayoub.dahmen.87"
              >
                <Icon cursor={"pointer"} as={FaFacebook} boxSize={7} />
              </Link>
              <Link
                opacity={".5"}
                _hover={{ opacity: "1" }}
                target="_blank"
                href="https://www.instagram.com/ayoub__dahmen/"
              >
                <Icon cursor={"pointer"} as={FaInstagram} boxSize={7} />
              </Link>
            </HStack>
          </HStack>
          <HStack gap={{ base: 2, md: 2, xl: 10 }}>
            <HStack>
              <Button>Anime</Button>
              <Button>Manga</Button>
              <Button>Products</Button>
              <Contact />
            </HStack>
            <HStack>
              <Button
                onClick={() => {
                  toggleColorMode();
                }}
              >
                {colorMode !== "dark" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </HStack>
          </HStack>
        </Stack>
        <Divider />
      </Show>

      <Show below="md">
        <HStack justifyContent={"space-between"}>
          <Button size={"lg"} onClick={onOpen} borderRadius={"0 0 15px 0"}>
            <HamburgerIcon />
          </Button>
          <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />

              <DrawerHeader borderBottomWidth="1px" textAlign={"center"}>
                <HStack>
                  <Image
                    filter={
                      colorMode === "dark"
                        ? "invert(40%) sepia(61%) saturate(2269%) hue-rotate(165deg) brightness(101%) contrast(101%)"
                        : ""
                    }
                    src={logo}
                    w={"50px"}
                  />
                  <Text color={colorMode === "dark" ? "cyan.400" : "green.700"}>
                    Hope
                  </Text>
                </HStack>
              </DrawerHeader>

              <DrawerBody>
                <VStack alignItems={"flex-start"} gap={30} my={5}>
                  <Button variant={"link"} alignSelf={"flex-start"}>
                    Anime
                  </Button>
                  <Button variant={"link"} alignSelf={"flex-start"}>
                    Manga
                  </Button>
                  <Button variant={"link"} alignSelf={"flex-start"}>
                    Products
                  </Button>
                  <Contact />
                </VStack>

                <HStack
                  mt={10}
                  gap={{ base: 5, md: 7, xl: 10 }}
                  justifyContent={"center"}
                >
                  <Link
                    opacity={".5"}
                    _hover={{
                      opacity: "1",
                      filter:
                        "invert(40%) sepia(61%) saturate(2269%) hue-rotate(165deg) brightness(101%) contrast(101%)",
                    }}
                    target="_blank"
                    href="https://github.com/ayowaaab"
                  >
                    <Icon cursor={"pointer"} as={FaGithub} boxSize={7} />
                  </Link>
                  <Link
                    opacity={".5"}
                    _hover={{ opacity: "1" }}
                    target="_blank"
                    href="https://www.facebook.com/ayoub.dahmen.87"
                  >
                    <Icon
                      cursor={"pointer"}
                      as={FaFacebook}
                      boxSize={7}
                      className="faicon"
                    />
                  </Link>
                  <Link
                    opacity={".5"}
                    _hover={{ opacity: "1" }}
                    target="_blank"
                    href="https://www.instagram.com/ayoub__dahmen/"
                  >
                    <Icon cursor={"pointer"} as={FaInstagram} boxSize={7} />
                  </Link>
                </HStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          <Button
            size={"lg"}
            borderRadius={"0 0 0 15px"}
            onClick={() => {
              toggleColorMode();
            }}
          >
            {colorMode !== "dark" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </HStack>
      </Show>
    </>
  );
}

export default Nav;
