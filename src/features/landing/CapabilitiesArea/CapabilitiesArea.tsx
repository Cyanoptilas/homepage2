import { Box } from "@chakra-ui/react";
import { Availability } from "../Availability";
import { Header01 } from "./Header01";
import { Section01 } from "./Section01";

function CapabilitiesArea() {
  return (
    <Box display="block" background="#fff" margin="0px 0 0">
      <Availability />

      <Box // Capabilities Contents
        display="block"
        maxWidth="1200px"
        margin="0 auto"
        padding="300px 0"
      >
        <Header01 />
        <Section01 />
      </Box>
    </Box>
  );
}

export { CapabilitiesArea };
