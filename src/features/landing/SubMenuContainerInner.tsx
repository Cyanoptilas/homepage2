import { Box } from "@chakra-ui/react";
import { useHoveredMenuItem } from "./HeaderContainer";
import { SubMenuContent1 } from "./SubMenuContent1";
import { SubMenuContent2 } from "./SubMenuContent2";
import { SubMenuContent3 } from "./SubMenuContent3";
import { SubMenuContent4 } from "./SubMenuContent4";
import { SubMenuContent5 } from "./SubMenuContent5";
import { SubMenuContent6 } from "./SubMenuContent6";
import SubMenuGroup from "./SubMenuGroup";

export default function SubMenuContainerInner() {
  const [value, setValue] = useHoveredMenuItem();

  return (
    <Box>
      <SubMenuGroup SubMenuIndex="1" />
      <SubMenuGroup SubMenuIndex="2" />
      <SubMenuGroup SubMenuIndex="3" />
      <SubMenuGroup SubMenuIndex="4" />
      <SubMenuGroup SubMenuIndex="5" />
      <SubMenuGroup SubMenuIndex="6" />
      {/* {value === "1" && <SubMenuContent1 />}
      {value === "2" && <SubMenuContent2 />}
      {value === "3" && <SubMenuContent3 />}
      {value === "4" && <SubMenuContent4 />}
      {value === "5" && <SubMenuContent5 />}
      {value === "6" && <SubMenuContent6 />} */}
    </Box>
  );
}

export { SubMenuContainerInner };
