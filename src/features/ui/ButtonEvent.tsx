import { Box } from "@chakra-ui/react";

function ButtonEvent() {
  return (
    <Box
      display="block"
      position="relative"
      fontWeight="700"
      fontSize="14px"
      height="35px"
      lineHeight="1"
      color="#fff"
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
