import { Story, Meta } from "@storybook/react/types-6-0";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Counter } from "./Counter";

export default {
  title: "Chakra/Counter",
  component: Counter,
  decorators: [
    (Story) => (
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    ),
  ],
} as Meta;

export const CounterStory: Story = () => <Counter />;
