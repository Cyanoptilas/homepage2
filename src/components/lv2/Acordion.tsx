import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

type AcoProps = {
  question: string;
  children: React.ReactNode;
};

export default function Aco({ question, children }: AcoProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Box w={"400px"}>
      <Heading
        bg="cyan.500"
        color="white"
        padding="4"
        cursor="pointer"
        onMouseOver={() => setIsOpen(!isOpen)}
        onMouseLeave={() => setIsOpen(!isOpen)}
        transition="0.5s"
        _hover={{
          opacity: "0.5",
        }}
      >
        {question}
      </Heading>
      <Box
        maxHeight={isOpen ? "100px" : "0"}
        overflow="hidden"
        transition="0.5s"
      >
        <Text padding="10" bg="cyan.100">
          {children}
        </Text>
      </Box>
    </Box>
  );
}

// export default function App() {
//   return (
//     <div className="App">
//       <VStack spacing="6" padding={"10"}>
//         <Aco question={"質問１"}>答え1</Aco>
//         <Aco question={"質問２"}>答え2</Aco>
//         <Aco question={"質問３"}>答え3</Aco>
//       </VStack>
//     </div>
//   );
// }
