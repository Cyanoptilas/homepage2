import { Button } from "@chakra-ui/react";

function ButtonLogin() {
  return (
    <Button
      as={"a"}
      width={"70px"}
      height={"32px"}
      marginRight={"16px"}
      fontSize={"sm"}
      fontWeight={950}
      color={"white"}
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
