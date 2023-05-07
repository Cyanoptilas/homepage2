import { Box, Flex, List, ListItem } from "@chakra-ui/react";
import { siteConfig } from "@/features/configs/site";
import { useHoveredMenuItem } from "../HeaderContainer";

function SubMenuContent({ subMenuIndex }: { subMenuIndex: string }) {
  const [value, setValue] = useHoveredMenuItem();

  return (
    <Box
      position="absolute"
      opacity={value === subMenuIndex ? "1" : "0"}
      transition="opacity 2s ease-in-out"
    >
      {parseInt(value) > 0 && (
        <Box pointerEvents="all" opacity="1" transitionDelay=".3s">
          <List>
            {siteConfig.mainNav[parseInt(value) - 1].items!.map((item: any) => {
              return (
                <Flex
                  key={item.title}
                  display="inline"
                  alignItems="center"
                  justifyContent="center"
                >
                  <ListItem
                    key={item.title}
                    display="inline"
                    alignItems="center"
                    justifyContent="center"
                    _before={{
                      content: "''",
                      position: "absolute",
                      bottom: "-30px",
                      width: "100%",
                      zIndex: "2",
                      height: "2px",
                      backgroundColor: "#00c4cc",
                      transition: "width 0.3s ease-in-out",
                    }}
                  >
                    {item.title}
                  </ListItem>
                </Flex>
              );
            })}
          </List>
        </Box>
      )}
    </Box>
  );
}
export { SubMenuContent };
