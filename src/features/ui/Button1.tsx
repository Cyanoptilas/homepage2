import { Button, SystemStyleObject, Text, VStack } from "@chakra-ui/react";
import { text } from "stream/consumers";

type Props = {
  buttonColor: string;
  textMain: string;
  textSub?: string;
  textColor: string;
  url: string;
  hover: SystemStyleObject;
};

function Button1({
  buttonColor,
  textMain,
  textSub,
  textColor,
  url,
  hover,
}: Props) {
  return (
    <Button
      as={"a"}
      width={"280px"}
      height={"50px"}
      paddingLeft={"10"}
      paddingRight={"10"}
      fontSize={"16px"}
      fontWeight={600}
      color={textColor}
      bg={buttonColor}
      rounded={100}
      // overflowWrap="break-word"
      href={url}
      _hover={hover}
    >
      <VStack>
        {textSub ? (
          <Text fontSize={"13px"}
          marginBottom="-6px">
            {textSub}
          </Text>
        ) : null}
        <Text>{textMain}</Text>
      </VStack>
    </Button>
  );
}

export { Button1 };
