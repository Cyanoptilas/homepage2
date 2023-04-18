import { Button } from "@chakra-ui/react";
import { useWindowScroll } from "react-use";

function ButtonContact() {
  const { x, y } = useWindowScroll();

  return (
    <Button
      as={"a"}
      width={"140px"}
      height={"40px"}
      marginRight={"16px"}
      fontSize={"sm"}
      fontWeight={600}
      color={"black"}
      border={"2px solid #e5e5e5"}
      borderColor={y > 80 ? "gray.400" : "white"}
      bg={"white"}
      rounded={100}
      href={"/"}
      _hover={{
        boxShadow: "0 5px 8px 0px rgba(0,0,0,.14)",
      }}
    >
      お問い合わせ
    </Button>
  );
}

export { ButtonContact };
