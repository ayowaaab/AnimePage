import {
  VStack,
  HStack,
  Image,
  Text,
  Show,
} from "@chakra-ui/react";

interface Props {
  heading: string;
  img: string;
}

function Article({ heading, img }: Props) {
  return (
    <>
      <Show above="md">
        
        <HStack cursor={"pointer"}>
          <Image borderRadius={6} objectFit={"cover"} w={50} h={50} src={img} />
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
          <Image borderRadius={6} objectFit={"cover"} w={50} h={50} src={img} />
          <Text
            _hover={{ textDecoration: "underline" }}
            fontSize={{ base: "sm", md: "xl", xl: "xl" }}
          >
            {heading}
          </Text>
        </VStack>
      </Show>
    </>
  );
}

export default Article;
