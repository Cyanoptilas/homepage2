import { Box, Button, Flex, List, ListItem } from "@chakra-ui/react";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { siteConfig } from "@/features/configs/site";
import { ButtonEvent } from "../ui/index";
import { useWindowScroll } from "react-use";

export default function HeaderNavLeft() {
  const { x, y } = useWindowScroll();

  return (
    <Flex alignItems="center">
      <List listStyleType="none" display="flex">
        {siteConfig.mainNav.map((item) => {
          return (
            <ListItem
              key={item.title}
              display="block"
              position="relative"
              fontWeight="700"
              fontSize="14.5px"
              height="14px"
              lineHeight="1"
              color={y > 80 ? "#777" : "#fff"}
              transition="color .3s ease"
              marginRight="28px"
            >
              {item.title} <FontAwesomeIcon icon={faAngleDown} size={"xs"} />
            </ListItem>
          );
        })}
      </List>
      <ButtonEvent />
    </Flex>
  );
}
