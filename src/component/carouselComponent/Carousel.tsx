import {
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

function Carousel() {
  return (
    <>
      <Grid templateColumns={{base:'1fr',md:"repeat(2,1fr)",xl:"repeat(2,1fr)"}} px={5} gap={3}>
        <VStack align={"flex-start"} justifyContent={"space-between"} order={{base:'2',md:'1',xl:'1'}}>
          <Heading>JUJUTSU KAISEN</Heading>
          <Text>
            "The right death" is what a boy fights for in the midst of the
            curses that plague our daily lives. These curses are born from
            negative emotions like hardship, regret, and shame, and they can
            wreak havoc on people's lives, often resulting in death. Ironically,
            the only way to banish these curses is by invoking another curse.
            Itadori Yuji is an average high schooler with extraordinary physical
            abilities. But when he consumes the finger
          </Text>
          <Stack spacing={15}>
            <Button size={'lg'} bg={'purple.700'}>Play Now</Button>
            <RadioGroup>
              <HStack gap={5}>
                <Radio defaultChecked colorScheme='purple' value="1"></Radio>
                <Radio colorScheme='purple' value="2"></Radio>
                <Radio colorScheme='purple' value="3"></Radio>
                <Radio colorScheme='purple' value="4"></Radio>
                <Radio colorScheme='purple' value="5"></Radio>
              </HStack>
            </RadioGroup>
          </Stack>
        </VStack>
        <Image order={{base:'1',md:'2',xl:'2'}} src="carouselGojo.jpg" borderRadius={30} height={'100%'} objectFit={'cover'} />
      </Grid>
    </>
  );
}

export default Carousel;
