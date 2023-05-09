import { Box } from "@chakra-ui/react";
import { HeaderLogo } from "../ui/index";
import { HeaderNav } from "./HeaderNav";

import { createGlobalState, useWindowScroll } from "react-use";
import SubMenuContainer from "./SubMenu/SubMenuContainer";

export const useHoveredMenuItem = createGlobalState<string>("0");

export default function HeaderContainer() {
  const { x, y } = useWindowScroll();
  const [value, setValue] = useHoveredMenuItem();

  return (
    <>
      <Box
        boxSizing="border-box"
        position="fixed"
        top="0"
        left="0"
        width="100vw"
        zIndex="1000"
        backgroundColor={y > 80 || value != "0" ? "white" : "transparent"}
        transition="background-color 0.3s ease-in-out"
        boxShadow={y > 80 ? "0 0 6px rgba(0,0,0,.24)" : "0"}
      >
        <Box
          maxWidth="1366px"
          height="72px"
          padding="0px 50px"
          margin="auto"
          display="flex"
          alignItems="center"
        >
          <HeaderLogo color={y > 80 || value != "0" ? "#00c4cc" : "white"} />
          <HeaderNav />
        </Box>
      </Box>
      <SubMenuContainer />
    </>
  );
}

export { HeaderContainer };
