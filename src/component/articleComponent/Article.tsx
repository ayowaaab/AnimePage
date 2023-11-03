import {
  VStack,
  HStack,
 
  Text,
  Show,
  Divider,
} from "@chakra-ui/react";

interface Props {
  heading: string;
} 

function Article({ heading }: Props) {
  return (
    <>
      <Show above="md">
        <HStack cursor={"pointer"}>
          <Text
            _hover={{ textDecoration: "underline" }}
            fontSize={{ base: "sm", md: "xl", xl: "xl" }}
          >
            {heading}
          </Text>
        </HStack>
      </Show>

      <Show below="md">
        <VStack cursor={"pointer"}>
          <Text
            _hover={{ textDecoration: "underline" }}
            fontSize={{ base: "sm", md: "xl", xl: "xl" }}
          >
            {heading}
          </Text>
        </VStack>
        <Divider h={5} mx={1} orientation="vertical"  />
      </Show>
    </>
  );
}

export default Article;
