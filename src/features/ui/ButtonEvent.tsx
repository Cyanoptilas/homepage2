import { Box } from "@chakra-ui/react";
import { useWindowScroll } from "react-use";
import { useHoveredMenuItem } from "../landing/HeaderContainer";

function ButtonEvent() {
  const { x, y } = useWindowScroll();
  const [value, setValue] = useHoveredMenuItem();

  return (
    <Box
      display="block"
      position="relative"
      fontWeight="700"
      fontSize="14px"
      height="35px"
      marginBottom={"2px"}
      color={y > 80 || value != "0" ? "#777" : "#fff"}
      transition="color .3s ease"
      padding="8px 5px"
      borderRadius="4px"
      marginLeft="-5px"
      _hover={{
        backgroundColor: "rgba(0,0,0,.1)",
      }}
      onMouseOver={() => setValue("0")}
    >
      イベント
    </Box>
  );
}

export { ButtonEvent };
