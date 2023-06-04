import { Box, Image, List, ListItem } from "@chakra-ui/react";

function AppealBanners() {
  const PseudoElements = {
    content: "' '",
    display: "block",
    height: "0",
    overflow: "hidden",
    visibility: "hidden",
    width: "0",
  };

  const hover = {
    color: "#333",
    boxShadow: "0 5px 8px 2px rgba(0,0,0,.14)",
    transform: "translateY(-1px)",
  };

  return (
    <Box backgroundColor="#fff" margin="50px auto 100px">
      <Box
        maxWidth="825px"
        height="200px"
        padding="0 10px"
        position="relative"
        boxSizing="border-box"
        margin="0 auto"
        width="100%"
      >
        <List margin="0 -20px" padding="0" bg="red">
          <ListItem width="50%" padding="0 20px" list-style="none" float="left">
            <Box
              as="a"
              href="https://jikken-in-progress.smarthr.jp/"
              textDecoration="none"
              display="block"
              margin="0 auto"
              position="relative"
              transition="all .2s ease"
              color="#44bdbd"
              outline="0"
              _hover={hover}
            >
              <Image
                src="./image/picture/img_jikken-in-progress.png"
                alt="働くの実験室"
              />
            </Box>
          </ListItem>
          <ListItem width="50%" padding="0 20px" list-style="none" float="left">
            <Box
              as="a"
              href="https://jikken-in-progress.smarthr.jp/"
              textDecoration="none"
              display="block"
              margin="0 auto"
              position="relative"
              transition="all .2s ease"
              color="#44bdbd"
              outline="0"
              _hover={hover}
            >
              <Image
                src="./image/picture/img_wednesday_holiday.png"
                alt="Wednesday Holiday"
              />
            </Box>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export { AppealBanners };
