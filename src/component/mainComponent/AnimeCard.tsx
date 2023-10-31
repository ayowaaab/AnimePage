import { ViewIcon } from "@chakra-ui/icons";
import {
  Card,
  Image,
  Button,
  Heading,
  CardBody,
  CardFooter,
  Text,
  Stack,
} from "@chakra-ui/react";

interface Props{
  img:string
}

function AnimeCard({img}:Props) {
  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        shadow={"md"}
        _hover={{transform:'scale(1.02)'}}
        transition={'.3s'}
      >
        <Image
          objectFit="cover"
          w={{base:"250px",md:"200px",xl:"250px"}}
          h={{base:"250px",md:"200px",xl:"250px"}}
          src={ "img/" + img}
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">The perfect latte</Heading>

            <Text py="2">
              Caffè latte is a coffee beverage of Italian origin made with
              espresso and steamed milk.
            </Text>
          </CardBody>

          <CardFooter>
            <Button colorScheme="blue" width={"200px"} m={{base:'0 auto',md:'auto 0',xl:'auto 0'}} rightIcon={<ViewIcon />}>
              Watch
            </Button>
          </CardFooter>
        </Stack>
        
      </Card>
    </>
  );
}

export default AnimeCard;
