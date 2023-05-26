import { Box, Button, Flex, List, ListItem, Text } from "@chakra-ui/react";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { siteConfig } from "@/features/configs/site";
import { useHoveredMenuItem } from "./HeaderContainer";
import { useWindowScroll } from "react-use";
import { ButtonTransparent } from "../ui/Button/ButtonTransparent";

export default function HeaderNav() {
  const { x, y } = useWindowScroll();
  const [value, setValue] = useHoveredMenuItem();

  return (
    <Flex
      flexGrow="1"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
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
                    <FontAwesomeIcon icon={faAngleDown} size="xs" />
                  </Box>
                </ListItem>
              </Flex>
            );
          })}
        </List>

        <ButtonTransparent
          label="イベント"
          height="38px"
          href="https://app.smarthr.jp/event"
        />
      </Flex>
      <Box>
        <Flex alignItems="center">
          <ButtonTransparent
            label="ログイン"
            height="32px"
            href="https://app.smarthr.jp/login"
          />

          <Button
            as="a"
            width="140px"
            height="40px"
            marginRight="16px"
            fontSize="sm"
            fontWeight={600}
            color="black"
            border="2px solid"
            borderColor={y > 80 || value != "0" ? "#e5e5e5" : "white"}
            bg="white"
            rounded={100}
            href="https://smarthr.jp/contact"
            _hover={{
              boxShadow: "0 5px 8px 0px rgba(0,0,0,.14)",
            }}
            onMouseOver={() => setValue("0")}
          >
            お問い合わせ
          </Button>

          <Button
            as="a"
            fontSize="sm"
            fontWeight={600}
            color="white"
            bg="orange"
            rounded={100}
            href="https://smarthr.jp/resources"
            _hover={{
              boxShadow: "0 4px 8px 2px rgba(0,0,0,.14)",
            }}
            onMouseOver={() => setValue("6")}
          >
            お役立ち資料
            <Box paddingLeft={2}>
              <FontAwesomeIcon icon={faAngleDown} size="xs" />
            </Box>
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}

export { HeaderNav };
