import { Button, SystemStyleObject, useColorModeValue } from "@chakra-ui/react";
import { Children } from "react";

type Props = {
  buttonColor: string;
  text: string;
  textColor: string;
  url: string;
  hover: SystemStyleObject;
};

function Button1({ buttonColor, text, textColor, url, hover }: Props) {
  return (
    <Button
      as={"a"}
      size={"lg"}
      paddingLeft={"10"}
      paddingRight={"10"}
      fontSize={"sm"}
      fontWeight={600}
      color={textColor}
      bg={buttonColor}
      rounded={100}
      position="relative"
      href={url}
      _hover={hover}
      border={useColorModeValue("#00c4cc", "gray.900")}
    >
      {text}
    </Button>
  );
}

export { Button1 };
