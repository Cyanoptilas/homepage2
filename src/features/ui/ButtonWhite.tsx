import { Button, SystemStyleObject, Text, VStack } from "@chakra-ui/react";

type Props = {
  textMain: string;
  textSub?: string;
  url: string;
  hover: SystemStyleObject;
};

function ButtonWhite({ textMain, textSub, url, hover }: Props) {
  return (
    <Button
      as="a"
      width="390px"
      height="55px"
      paddingLeft="10"
      paddingRight="10"
      fontSize="16px"
      fontWeight="600"
      color="black"
      background="white"
      rounded="100"
      href={url}
      _hover={hover}
    >
      <VStack>
        {textSub ? (
          <Text fontSize="13px" marginBottom="-6px">
            {textSub}
          </Text>
        ) : null}
        <Text>{textMain}</Text>
      </VStack>
    </Button>
  );
}

export { ButtonWhite };
