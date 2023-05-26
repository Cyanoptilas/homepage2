import { useHoveredMenuItem } from "@/features/landing/HeaderContainer";
import { Button } from "@chakra-ui/react";
import { useWindowScroll } from "react-use";

interface Props {
  label: string;
  height: string;
  href: string;
}

function ButtonTransparent({ label, height, href }: Props) {
  const { x, y } = useWindowScroll();
  const [value, setValue] = useHoveredMenuItem();

  return (
    <Button
      as="a"
      width="70px"
      height={height}
      background="transparent"
      marginTop="0px"
      marginRight="16px"
      fontSize="14px"
      fontWeight="950"
      color={y > 80 || value != "0" ? "#777" : "#fff"}
      href={href}
      transition="0.3s"
      _hover={{
        backgroundColor: "rgba(0,0,0,.1)",
      }}
      onMouseOver={() => setValue("0")}
    >
      {label}
    </Button>
  );
}

export { ButtonTransparent };
