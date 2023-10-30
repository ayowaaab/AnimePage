import { HStack, Heading, Text } from "@chakra-ui/react";

interface Props{
  heading:string;
  icon : string;
}

function Article({heading,icon}:Props) {
  return (
    <>
        <HStack  cursor={"pointer"}>
          <Heading fontSize={"2xl"}>{icon}</Heading>
          <Text _hover={{ textDecoration: "underline" }} width={"250px"} fontSize={"xl"}>{heading}</Text>
        </HStack>
    </>
  );
}

export default Article;
