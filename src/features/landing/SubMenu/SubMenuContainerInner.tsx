import { Box } from "@chakra-ui/react";
import { SubMenuGroup } from "./SubMenuGroup";

function SubMenuContainerInner() {
  return (
    <Box>
      <SubMenuGroup SubMenuIndex="1" />
      <SubMenuGroup SubMenuIndex="2" />
      <SubMenuGroup SubMenuIndex="3" />
      <SubMenuGroup SubMenuIndex="4" />
      <SubMenuGroup SubMenuIndex="5" />
      <SubMenuGroup SubMenuIndex="6" />
    </Box>
  );
}

export { SubMenuContainerInner };
