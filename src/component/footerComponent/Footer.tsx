import { Grid, Heading, Link, Stack, GridItem, Image, HStack, } from "@chakra-ui/react";
import logo from '../../assets/Logo.svg'
function Footer() {
  return (
    <>
  
    <Grid gap={10} templateColumns={{base:'1fr',md:'1fr 1fr 1fr',xl:'repeat(5,1fr)'}}  p={'3rem 2rem'} bg={"blackAlpha.100"} alignItems={"center"}>

      <GridItem justifySelf={{base:'center',md:'center',xl:'start'}} colSpan={{base : 1 , md:3, xl:2}} >
        <HStack>
        <Image src={logo} w={'100px'}  />
        <Heading size={'lg'} color={'green.700'} display={{base:"none",md:'none',xl:'block'}}>HopeFoundation</Heading>
        </HStack>
     
      </GridItem>

      <GridItem textAlign={{base:'center',md:'start',xl:'start'}}>
        <Heading mb={3} size={'lg'} >Contact Us</Heading>
        <Stack>
          <Link>About Us</Link>
          <Link>Directions</Link>
          <Link>Blog</Link>
        </Stack>
      </GridItem>

      <GridItem textAlign={{base:'center',md:'start',xl:'start'}}>
        <Heading mb={3} size={'lg'}>Promotions</Heading>
        <Stack>
          <Link>Partners</Link>
          <Link>Careers</Link>
          <Link>FAQs</Link>
        </Stack>
      </GridItem>

      <GridItem textAlign={{base:'center',md:'start',xl:'start'}}>
        <Heading mb={3} size={'lg'}>Media</Heading>
        <Stack>
          <Link>WinStar Wallpapers</Link>
          <Link>Central Park at WinStar Village</Link>
          <Link>Responsible Gaming</Link>
        </Stack>
      </GridItem>
    </Grid>

    </>
  );
}

export default Footer;
