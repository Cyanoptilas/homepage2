import { Button } from "@chakra-ui/react";
import { useWindowScroll } from "react-use";
import { useHoveredMenuItem } from "../../landing/HeaderContainer";

function ButtonLogin() {
  const { x, y } = useWindowScroll();
  const [value, setValue] = useHoveredMenuItem();

  return (
    <Button
      as={"a"}
      width={"70px"}
      height={"32px"}
      marginTop={"5px"}
      marginRight={"16px"}
      fontSize={"sm"}
      fontWeight={950}
      color={y > 80 || value != "0" ? "#777" : "#fff"}
      variant={"link"}
      href={"#"}
      transition="0.3s"
      _hover={{
        backgroundColor: "rgba(0,0,0,.1)",
      }}
      onMouseOver={() => setValue("0")}
    >
      ログイン
    </Button>
  );
}

export { ButtonLogin };
