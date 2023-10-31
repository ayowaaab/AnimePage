import { HStack, Heading, Text } from "@chakra-ui/react";

interface Props{
  heading:string;
  icon : string;
}

function Article({heading,icon}:Props) {
  return (
    <>
        <HStack  cursor={"pointer"}>
          <Heading fontSize={{base:"sm",md:"xl",xl:"xl"}}>{icon}</Heading>
          <Text _hover={{ textDecoration: "underline" }} fontSize={{base:"sm",md:"xl",xl:"xl"}}>{heading}</Text>
        </HStack>
    </>
  );
}

export default Article;
