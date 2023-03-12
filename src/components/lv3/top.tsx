import {
  Box,
  Flex,
  Text,
  HStack,
  Image,
  useColorModeValue,
  VStack,
  Button,
  Container,
} from "@chakra-ui/react";
import NextImage from "next/image";

export default function Top() {
  return (
    <>
      <Box
        bg={useColorModeValue("#00c4cc", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        // height={"500"}
        maxH={"470"}
        maxHeight={500}
        width={"100%"}
        borderColor={useColorModeValue("#00c4cc", "gray.900")}
      >
        <HStack>
          <VStack
            align="center"
            style={{ marginLeft: 180 }}
            transform="translate(6%)"
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
                size={"lg"}
                paddingLeft={"10"}
                paddingRight={"10"}
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
                size={"lg"}
                paddingLeft={"10"}
                paddingRight={"10"}
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

          <Box width={"100%"} height={450} overflow="hidden">
            <Image
              src="/image/picture/img_home01.png"
              alt="img_top"
              fit={"cover"}
              align="left"
              width={700}
              height={550}
            />
          </Box>
        </HStack>
      </Box>
    </>
  );
}
