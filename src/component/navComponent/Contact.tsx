import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Grid,
  Input,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";

function Contact() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const cancelRef = React.useRef(null);

  return (
    <>
      <Button size={{base:'lg',md:'md',xl:'md'}} colorScheme="twitter" onClick={onOpen}>
        Contact
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="2xl" fontWeight="bold">
              Write you Message
            </AlertDialogHeader>

            <AlertDialogBody>
              <Grid gap={3} fontSize={"80px"}>
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" />
                <Textarea placeholder="Here you write your Message" />
              </Grid>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="blue"
                onClick={() => {
                  onClose();
                  toast({
                    title: 'Message Sent.',
                    description: "Thank you for your Time.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  })
                }}
                ml={3}
              >
                Send
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default Contact;
