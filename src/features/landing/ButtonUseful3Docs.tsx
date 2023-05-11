import { Box, Button, Flex, HStack, Image, VStack } from "@chakra-ui/react";

function ButtonUseful3Docs() {
  const textSub = "SmartHRがすぐわかる！";
  const textMain = "お役立ち資料3点セット";
  return (
    <Button
      as="a"
      width="390px"
      height="56px"
      fontWeight="600"
      color="white"
      bg="#fc9a00"
      rounded="100"
      href="https://smarthr.jp/resources/tv-campaign"
      _hover={{
        top: "-1px",
        boxShadow: "0 5px 8px 2px rgba(0,0,0,.14)",
        transform: "translateY(-1px)",
        filter: "brightness(1.1)",
      }}
    >
      <HStack>
        <Flex
          height="70px"
          width="150px"
          position="relative"
          background="transparent"
          marginLeft="-7px"
          marginTop="-14px"
        >
          <Image
            src="/image/picture/img_useful_documents.png"
            alt="img_useful_documents"
            height="70px"
            width="150px"
            fit="cover"
            align="top"
            position="absolute"
          />
        </Flex>
        <Flex marginTop="0" height="56px" padding="6px 1px 10px 0">
          <VStack
            paddingLeft="0px"
            paddingTop="7px"
            display="block"
            flex="1"
            textAlign="left"
            lineHeight="0.9"
          >
            <Flex
              fontSize="12px"
              paddingLeft="17px"
              border="0"
              margin="0"
              verticalAlign="baseline"
            >
              {textSub}
            </Flex>
            <Flex>{textMain}</Flex>
          </VStack>
        </Flex>
        <Flex height="20px" width="20px" background="transparent">
          <Image
            src="/image/picture/icon_download.svg"
            alt="img_top"
            height="20px"
            width="20px"
          />
        </Flex>
      </HStack>
    </Button>
  );
}

export { ButtonUseful3Docs };
