import { useState } from "react";
import {
  Container,
  Button,
  ButtonGroup,
  Heading,
  Text,
} from "@chakra-ui/react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Heading mb={3}>A really exciting counter</Heading>
      <Text>Current count is: {count}</Text>
      <ButtonGroup mt={2}>
        <Button
          colorScheme="gray"
          variant="solid"
          onClick={() => setCount((c) => c - 1)}
        >
          -
        </Button>
        <Button
          colorScheme="green"
          variant="solid"
          onClick={() => setCount((c) => c + 1)}
        >
          +
        </Button>
      </ButtonGroup>
    </Container>
  );
};
