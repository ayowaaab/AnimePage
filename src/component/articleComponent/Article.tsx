import { HStack, Image, Text } from "@chakra-ui/react";

function Article() {
  return (
    <>
        <HStack _hover={{ textDecoration: "underline" }} cursor={"pointer"}>
          <Image w={"40px"} objectFit={"cover"} src="img/satoru.jpeg" />
          <Text fontSize={"xl"}>Love</Text>
        </HStack>
    </>
  );
}

export default Article;
