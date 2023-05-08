import { Box, Flex, Link, List, ListItem } from "@chakra-ui/react";
import { siteConfig } from "@/features/configs/site";
import { useHoveredMenuItem } from "../HeaderContainer";
import { SubMenuGrid } from "./SabMenuGrid";

function SubMenuContent4() {
  const [value, setValue] = useHoveredMenuItem();
  const subMenuIndex = "4";

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
export { SubMenuContent4 };
