import { Box, Flex, keyframes, List, ListItem, Text } from "@chakra-ui/react";

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
                display="flex"
                position="relative"
                fontWeight="600"
                fontSize="14px"
                height="14px"
                lineHeight="1"
                color={y > 80 || value != "0" ? "#777" : "white"}
                transition="color .3s ease"
                marginRight="28px"
                onMouseOver={() => setValue(item.id!)}
                _before={{
                  content: "''",
                  position: "absolute",
                  bottom: "-30px",
                  width: "100%",
                  zIndex: "2",
                  height: "4px",
                  backgroundColor: "#00c4cc",
                  transition: "transform 0.3s ease-in-out",
                  transform: item.id === value ? "scaleX(1)" : "scaleX(0)",
                }}
              >
                {item.title}
                <Box marginLeft="8px">
                  <FontAwesomeIcon icon={faAngleDown} size={"xs"} />
                </Box>
              </ListItem>
            </Flex>
          );
        })}
      </List>
      <ButtonEvent />
    </Flex>
  );
}
