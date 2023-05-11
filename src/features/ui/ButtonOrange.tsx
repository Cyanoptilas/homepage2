import { Button } from "@chakra-ui/react";

interface Props {
  label: string;
  href: string;
  width?: string;
  height?: string;
  fontSize?: string;
  isBlank?: boolean;
}

function ButtonOrange({
  label,
  href,
  width,
  height,
  fontSize,
  isBlank = false,
}: Props) {
  return (
    <Button
      as="a"
      href={href}
      target={isBlank ? "_blank" : "_self"}
      rel={isBlank ? "noopener noreferrer" : ""}
      position="relative"
      width={width ? width : "73%"}
      maxWidth={width ? "100%" : "280px"}
      height={height ? height : "48px"}
      borderRadius="48px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      border="2px solid transparent"
      backgroundColor="#fd9a00"
      fontWeight="700"
      fontSize={fontSize ? fontSize : "14px"}
      lineHeight="1.5"
      color="white"
      padding="0 40px"
      transition="all .2s ease"
      outline="0"
      textDecoration="none"
      _hover={{
        boxShadow: "0 5px 8px 2px rgba(0,0,0,.14)",
        transform: "translateY(-1px)",
        backgroundColor: "#f6b12f",
      }}
    >
      {label}
    </Button>
  );
}

export { ButtonOrange };
