import { Button } from "@chakra-ui/react";

function ButtonContact() {
  return (
    <Button
      as={"a"}
      width={"140px"}
      height={"40px"}
      marginRight={"16px"}
      fontSize={"sm"}
      fontWeight={600}
      color={"black"}
      border={"1px"}
      borderColor={"white"}
      // borderColor={"gray.400"} // hover, スクロールした時だけ
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
