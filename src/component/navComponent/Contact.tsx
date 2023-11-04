import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";

function Contact() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const toast = useToast();

  return (
    <>
      <Button
        size={{ base: "lg", md: "md", xl: "md" }}
        colorScheme="twitter"
        onClick={onOpen}
      >
        Contact
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        blockScrollOnMount={false}
      >
        <ModalOverlay />
        <ModalContent minW={{md:'xl',xl:'3xl'}}>
          <ModalHeader>Contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>First name</FormLabel>
              <Input
                name="firstName"
                ref={initialRef}
                placeholder="First name"
              />
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input
                name="lastName"
                ref={initialRef}
                placeholder="Last name"
                required={true}
              />
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel>Email</FormLabel>
              <Input name="email" placeholder="Email" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Message</FormLabel>
              <Textarea name="msg" placeholder="Write Here..." />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              type="submit"
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onClose();
                toast({
                  title: 'Message Send.',
                  description: "We'll Respond you soon ❤",
                  status: 'success',
                  duration: 3000,
                  isClosable: true,
                });
              }}
            >
              Send
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Contact;
