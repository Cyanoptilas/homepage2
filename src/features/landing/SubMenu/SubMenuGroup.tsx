import { Box } from "@chakra-ui/react";
import { useHoveredMenuItem } from "../HeaderContainer";
import { SubMenuContent1 } from "./SubMenuContent1";
import { SubMenuContent2 } from "./SubMenuContent2";
import { SubMenuContent3 } from "./SubMenuContent3";
import { SubMenuContent4 } from "./SubMenuContent4";
import { SubMenuContent5 } from "./SubMenuContent5";
import { SubMenuContent6 } from "./SubMenuContent6";

function SubMenuGroup({ SubMenuIndex }: { SubMenuIndex: string }) {
  const [value, setValue] = useHoveredMenuItem();

  return (
    <Box
      width="100%"
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%,-50%)"
      opacity={value === SubMenuIndex ? "1" : "0"}
      transition="opacity 0.6s ease"
      transitionDelay=".3s"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {SubMenuIndex === "1" && <SubMenuContent1 />}
      {SubMenuIndex === "2" && <SubMenuContent2 />}
      {SubMenuIndex === "3" && <SubMenuContent3 />}
      {SubMenuIndex === "4" && <SubMenuContent4 />}
      {SubMenuIndex === "5" && <SubMenuContent5 />}
      {SubMenuIndex === "6" && <SubMenuContent6 />}
    </Box>
  );
}

export { SubMenuGroup };
