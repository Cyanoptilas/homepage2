import { Box } from "@chakra-ui/react";
import { Availability } from "../Availability";
import { Header01 } from "./Header01";
import { Header02 } from "./Header02";
import { Section01 } from "./Section01";
import { Section02 } from "./Section02";

function CapabilitiesArea() {
  return (
    <Box display="block" background="#fff" margin="0px 0 0">
      <Availability />

      <Box // 01
        display="block"
        maxWidth="1200px"
        margin="0 auto"
        padding="60px 0"
      >
        <Header01 />
        <Section01 />
      </Box>
      <Box // 02
        display="block"
        maxWidth="1200px"
        margin="0 auto"
        padding="60px 0"
      >
        <Header02 />
        <Section02 />
      </Box>
    </Box>
  );
}

export { CapabilitiesArea };
