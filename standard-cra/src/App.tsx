import { ChakraProvider, theme } from "@chakra-ui/react";
import { Counter } from "./Counter";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Counter />
    </ChakraProvider>
  );
}

export default App;
