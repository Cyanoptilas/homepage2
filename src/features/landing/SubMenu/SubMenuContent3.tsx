import { Box, Flex, Link, List, ListItem } from "@chakra-ui/react";
import { siteConfig } from "../../configs/site";
import { useHoveredMenuItem } from "../HeaderContainer";
import { SubMenuGrid } from "./SabMenuGrid";

function SubMenuContent3() {
  const [value, setValue] = useHoveredMenuItem();
  const subMenuIndex = "3";

  const items = siteConfig.mainNav[parseInt(subMenuIndex) - 1];

  if (value === subMenuIndex) {
    return (
      <>
        <SubMenuGrid item1={items} id={subMenuIndex} />
      </>
    );
  } else {
    return <></>;
  }
}
export { SubMenuContent3 };
