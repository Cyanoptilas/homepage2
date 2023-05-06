import { Box, Flex, Link, List, ListItem } from "@chakra-ui/react";
import { siteConfig } from "../configs/site";
import { useHoveredMenuItem } from "./HeaderContainer";

function SubMenuContent4() {
  const [value, setValue] = useHoveredMenuItem();
  const subMenuIndex = "4";
  if (value === subMenuIndex) {
    return (
      <Box>
        <List>
          {siteConfig.mainNav[parseInt(subMenuIndex) - 1].items!.map(
            (item: any) => {
              return (
                <Link key={item.title} href={item.href}>
                  <Flex>
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
                      {item.title}
                    </ListItem>
                  </Flex>
                </Link>
              );
            }
          )}
        </List>
      </Box>
    );
  } else {
    return <></>;
  }
}
export { SubMenuContent4 };
