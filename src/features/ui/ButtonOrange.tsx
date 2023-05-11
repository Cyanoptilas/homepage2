import { Button } from "@chakra-ui/react";

interface Props {
  label: string;
  href: string;
  isBlank?: boolean;
}

function ButtonOrange({ label, href, isBlank = false }: Props) {
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
      border="2px solid transparent"
      backgroundColor="#fd9a00"
      fontWeight="700"
      fontSize="14px"
      lineHeight="1.5"
      color="white"
      padding="0 40px"
      transition="all .2s ease"
      outline="0"
      textDecoration="none"
      _hover={{
        boxShadow: "0 5px 8px 2px rgba(0,0,0,.14)",
        transform: "translateY(-1px)",
      }}
    >
      {label}
    </Button>
  );
}

export { ButtonOrange };
