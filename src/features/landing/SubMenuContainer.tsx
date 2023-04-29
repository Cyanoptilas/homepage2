import { Box } from "@chakra-ui/react";
import { useHoveredMenuItem } from "./HeaderContainer";

export default function SubMenuContainer() {
  const [value, setValue] = useHoveredMenuItem();

  return (
    <Box
      width="100vw"
      height={value != "0" ? "268px" : "0"}
      borderTop="2px solid #f4f8f9"
      position="fixed"
      top={value != "0" ? "72px" : "0"}
      backgroundColor="#fff"
      overflow="hidden"
      boxShadow="0 0 6px rgba(0,0,0,.24)"
      zIndex="999"
      transition="all 0.3s ease-in-out"
      onMouseLeave={() => setValue("0")}
    >
      test
      {value}
      <br />
      {value}
      <br />
      {value}
      <br />
      {value}
      <br />
      {value}
      <br />
      {value}
      <br />
      {value}
      <br />
      {value}
      <br />
      {value}
      <br />
      {value}
      <br />
      {value}
      <br />
      <Box maxWidth="1366px"></Box>
    </Box>
  );
}
