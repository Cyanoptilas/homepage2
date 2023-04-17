import { Box, Button } from "@chakra-ui/react";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ButtonUsefulDocs() {
  return (
    <Button
      as={"a"}
      fontSize={"sm"}
      fontWeight={600}
      color={"white"}
      bg={"orange"}
      rounded={100}
      href={"#"}
      _hover={{
        boxShadow: "0 4px 8px 2px rgba(0,0,0,.14)",
      }}
    >
      お役立ち資料
      <Box paddingLeft={2}>
        <FontAwesomeIcon icon={faAngleDown} size={"xs"} />
      </Box>
    </Button>
  );
}

export { ButtonUsefulDocs };
