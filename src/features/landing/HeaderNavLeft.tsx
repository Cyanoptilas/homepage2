import {
  Box,
  Button,
  Flex,
  List,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { siteConfig } from "@/features/configs/site";
import { ButtonEvent } from "../ui/index";

export default function HeaderNavLeft() {
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
              color="#fff"
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
