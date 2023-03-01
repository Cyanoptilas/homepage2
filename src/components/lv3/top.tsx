import {
  Box,
  Flex,
  Text,
  HStack,
  Image,
  useColorModeValue,
  VStack,
  Button,
} from "@chakra-ui/react";

export default function Top() {
  return (
    <>
      <Box
        bg={useColorModeValue("#00c4cc", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"460px"}
        borderColor={useColorModeValue("#00c4cc", "gray.900")}
      >
        <HStack>
          <VStack 
            align="center"
            style={{ marginLeft: 180 }}
            transform="translate(8%)"
          >
            <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
              <Image
                src="/image/character/syain-ni-ii.svg"
                alt="syain-ni-ii"
                minW={300}
                objectFit="contain"
                style={{ marginTop: 25 }}
              />
            </Flex>
            <Flex maxW={340}>
              <Image
                src="/image/picture/img_screenshot.png"
                alt="img_screenshot"
              />
            </Flex>
            <Text fontSize="lg" color={"white"} align="center" as="b">
              人事・労務の業務効率化から
              <br />
              人材マネジメントまで！
            </Text>
            <HStack>
              <Button
                as={"a"}
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"black"}
                bg={"white"}
                rounded={100}
                href={"#"}
                _hover={{}}
              >
                無料で試してみる
              </Button>
              <Button
                as={"a"}
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"orange"}
                rounded={100}
                href={"#"}
                _hover={{}}
              >
                資料ダウンロード
              </Button>
            </HStack>
          </VStack>
          <Image src="/image/picture/img_top.png" alt="img_top" minW={710} />
        </HStack>
      </Box>
    </>
  );
}
