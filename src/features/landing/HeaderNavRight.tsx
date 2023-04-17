import { Box, Flex } from "@chakra-ui/react";
import { ButtonContact, ButtonLogin, ButtonUsefulDocs } from "../ui/index";

export default function HeaderNavRight() {
  return (
    <Box>
      <Flex>
        <ButtonLogin />

        <ButtonContact />
        <ButtonUsefulDocs />
      
      </Flex>
    </Box>
  );
}
