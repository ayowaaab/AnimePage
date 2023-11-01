// import { ViewIcon } from "@chakra-ui/icons";
import {
  Card,
  Image,
  Button,
  Heading,
  CardBody,
  CardFooter,
  Stack,
  ButtonGroup,
  Divider,
} from "@chakra-ui/react";

interface Props {
  img: string;
  title: string;
}

function AnimeCard({ img,title }: Props) {
  return (
    <>
      <Stack align={"center"} >
        <Card boxShadow={'0 0px 15px rgba(0, 0, 0, 0.2)'} px={3} maxW="sm" _hover={{transform:'scale(1.05)',cursor:'pointer'}} transition={'.3s'}>
          <CardBody p={3}>
            <Image
              src={"img/" + img}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              objectFit={"cover"}
              h={'xs'}
            />
            <Stack my={3} justifyContent={"center"} align={"center"}>
              <Heading size="md">{title}</Heading>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter justifyContent={"center"} py={2}>
            <ButtonGroup>
              <Button px={10} colorScheme="blue">
                Watch
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Stack>
    </>
  );
}

export default AnimeCard;
