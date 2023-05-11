import { Button } from "@chakra-ui/react";

interface Props {
  label: string;
  href: string;
  isBlank?: boolean;
}

function ButtonWhiteBordered({ label, href, isBlank = false }: Props) {
  const IconBlank = {
    content: '""',
    position: "absolute",
    width: "12px",
    height: "12px",
    top: "50%",
    right: "18px",
    transform: "translateY(-50%)",
    backgroundImage: "url(/image/picture/icon_blank_gray.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50%",
    backgroundSize: "contain",
  };

  return (
    <Button
      as="a"
      href={href}
      target={isBlank ? "_blank" : "_self"}
      rel={isBlank ? "noopener noreferrer" : ""}
      position="relative"
      width="73%"
      maxWidth="280px"
      height="48px"
      borderRadius="48px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      border="2px solid #e5e5e5"
      backgroundColor="#fff"
      fontWeight="700"
      fontSize="14px"
      lineHeight="1.5"
      color="#444"
      padding="0 40px"
      transition="all .2s ease"
      outline="0"
      textDecoration="none"
      _hover={{
        boxShadow: "0 5px 8px 2px rgba(0,0,0,.14)",
        transform: "translateY(-1px)",
      }}
      _before={isBlank ? IconBlank : {}}
    >
      {label}
    </Button>
  );
}

export { ButtonWhiteBordered };
