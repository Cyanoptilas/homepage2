import { Box, Flex, Link, List, ListItem } from "@chakra-ui/react";
import NextLink from "next/link";
import { siteConfig } from "../configs/site";
import { useHoveredMenuItem } from "./HeaderContainer";

function SubMenuContent2() {
  // function SubMenuContent1({subMenuIndex}:{subMenuIndex: string}) {
  const [value, setValue] = useHoveredMenuItem();
  const subMenuIndex = "2";

  if (value === subMenuIndex) {
    return (
      <Box outline="0" textDecoration="none">
        <List>
          {siteConfig.mainNav[parseInt(subMenuIndex) - 1].items!.map(
            (item: any) => {
              return (
                <Link key={item.title}>
                  <Flex
                    key={item.title}
                    display="block"
                    _hover={{ color: "red" }}
                  >
                    <ListItem
                      key={item.title}
                      _before={{
                        content: "''",
                        position: "absolute",
                        bottom: "-10px",
                        width: "110px",
                        zIndex: "2",
                        height: "2px",
                        backgroundColor: "#00c4cc",
                        transition: "width 2s ease-in-out",
                        // transform: subMenuIndex === value ? "scaleX(1)" : "scaleX(0)",
                      }}
                    >
                      <NextLink href={item.href}>{item.title}</NextLink>
                    </ListItem>
                  </Flex>
                </Link>
              );
            }
          )}
        </List>
        {/* </Box> */}
      </Box>
    );
  } else {
    return <></>;
  }
}
export { SubMenuContent2 };
