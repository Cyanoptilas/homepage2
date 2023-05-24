import { Button } from "@chakra-ui/react";
import { useWindowScroll } from "react-use";
import { useHoveredMenuItem } from "../../landing/HeaderContainer";

function ButtonContact() {
  const { x, y } = useWindowScroll();
  const [value, setValue] = useHoveredMenuItem();

  return (
    <Button
      as={"a"}
      width={"140px"}
      height={"40px"}
      marginRight={"16px"}
      fontSize={"sm"}
      fontWeight={600}
      color={"black"}
      border={"2px solid"}
      borderColor={y > 80 || value != "0" ? "#e5e5e5" : "white"}
      bg={"white"}
      rounded={100}
      href={"/"}
      _hover={{
        boxShadow: "0 5px 8px 0px rgba(0,0,0,.14)",
      }}
      onMouseOver={() => setValue("0")}
    >
      お問い合わせ
    </Button>
  );
}

export { ButtonContact };
