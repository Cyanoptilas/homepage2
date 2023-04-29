import { Flex, List, ListItem, Text } from "@chakra-ui/react";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { siteConfig } from "@/features/configs/site";
import { ButtonEvent } from "../ui/index";
import { useHoveredMenuItem } from "./HeaderContainer";
import { useWindowScroll } from "react-use";

export default function HeaderNavLeft() {
  const { x, y } = useWindowScroll();
  const [value, setValue] = useHoveredMenuItem();

  return (
    <Flex alignItems="center">
      <List listStyleType="none" display="flex">
        {siteConfig.mainNav.map((item) => {
          return (
            <Flex key={item.title}>
              <ListItem
                key={item.title}
                display="block"
                position="relative"
                fontWeight="700"
                fontSize="14.5px"
                height="14px"
                lineHeight="1"
                color={y > 80 || value != "0" ? "#777" : "white"}
                transition="color .3s ease"
                marginRight="28px"
                onMouseOver={() => setValue(item.id!)}
              >
                {item.title}
                <FontAwesomeIcon icon={faAngleDown} size={"xs"} />
              </ListItem>
            </Flex>
          );
        })}
      </List>
      <ButtonEvent />
    </Flex>
  );
}
