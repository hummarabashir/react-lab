import { Heading, Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack>
      <VStack bg="white"  borderRadius="lg">
        <Image src={imageSrc} borderRadius="lg" />
        <Box px={4} py={4}>
          <Heading as='h2' fontSize="1.4em" color="black">{ title } </Heading>
          <Text fontSize="sm" mt="4" color="grey">{description}</Text>
          <Text fontSize="sm" mt="5" color="black" align="left">See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
        </Box>
      </VStack>
    </HStack>
  );
};

export default Card;
