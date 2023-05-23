import { Button, Flex, HStack, Image, VStack } from "@chakra-ui/react";

function ButtonDownloadDocs() {
  const textMain = "資料をダウンロードする";
  return (
    <Button
      as="a"
      width="500px"
      height="60px"
      margin="40px auto 0"
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
          height="80px"
          width="200px"
          position="relative"
          background="transparent"
          marginLeft="-32px"
          marginTop="-21px"
        >
          <Image
            src="/image/picture/img_useful_documents.png"
            alt="img_useful_documents"
            height="80px"
            width="200px"
            fit="cover"
            align="top"
            position="absolute"
          />
        </Flex>
        <Flex>
          <Flex paddingLeft="12px">{textMain}</Flex>
        </Flex>
        <Flex height="20px" width="20px" background="transparent">
          <Image
            src="/image/picture/icon_download.svg"
            alt="img_top"
            height="20px"
            width="20px"
            marginLeft="24px"
          />
        </Flex>
      </HStack>
    </Button>
  );
}

export { ButtonDownloadDocs };
