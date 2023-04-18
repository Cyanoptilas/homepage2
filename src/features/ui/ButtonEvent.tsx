import { Box } from "@chakra-ui/react";
import { useWindowScroll } from "react-use";

function ButtonEvent() {
  const { x, y } = useWindowScroll();

  return (
    <Box
      display="block"
      position="relative"
      fontWeight="700"
      fontSize="14px"
      height="35px"
      lineHeight="1"
      color={y > 80 ? "#777" : "#fff"}
      transition="color .3s ease"
      padding="8px 5px"
      borderRadius="4px"
      marginLeft="-5px"
      _hover={{
        backgroundColor: "rgba(0,0,0,.1)",
      }}
    >
      イベント
    </Box>
  );
}

export { ButtonEvent };
