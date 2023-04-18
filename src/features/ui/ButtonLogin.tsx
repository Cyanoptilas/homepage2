import { Button } from "@chakra-ui/react";
import { useWindowScroll } from "react-use";

function ButtonLogin() {
  const { x, y } = useWindowScroll();

  return (
    <Button
      as={"a"}
      width={"70px"}
      height={"32px"}
      marginRight={"16px"}
      fontSize={"sm"}
      fontWeight={950}
      color={y > 80 ? "#777" : "#fff"}
      variant={"link"}
      href={"#"}
      transition="0.3s"
      _hover={{
        backgroundColor: "rgba(0,0,0,.1)",
      }}
    >
      ログイン
    </Button>
  );
}

export { ButtonLogin };
