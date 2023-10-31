import { HStack, Text } from "@chakra-ui/react";

interface Props{
  heading:string;

}

function Article({heading}:Props) {
  return (
    <>
        <HStack  cursor={"pointer"}>
          <Text _hover={{ textDecoration: "underline" }} fontSize={{base:"sm",md:"xl",xl:"xl"}}>{heading}</Text>
        </HStack>
    </>
  );
}

export default Article;
