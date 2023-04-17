import {
  Box,
  Flex,
  Text,
  HStack,
  Image,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { IsHoverProvider } from "../hooks/hover-context";
import { Button1 } from "../ui";

function Top() {
  return (
    <>
      <IsHoverProvider>
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
              <Flex
                flex={{ base: 1 }}
                justify={{ base: "center", md: "start" }}
              >
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
                <Button1
                  buttonColor="white"
                  text="無料で試してみる"
                  textColor="black"
                  url=""
                  hover={{
                    top: "-1px",
                    boxShadow: "0 5px 8px 2px rgba(0,0,0,.14)",
                  }}
                />
                <Button1
                  buttonColor="orange"
                  text="資料ダウンロード"
                  textColor="white"
                  url=""
                  hover={{
                    top: "-1px",
                    boxShadow: "0 5px 8px 2px rgba(0,0,0,.14)",
                  }}
                />
              </HStack>
            </VStack>

            <Box width={"100%"} height={450} overflow="hidden">
              {/* <Image
                src="/image/picture/img_home01.png"
                alt="img_top"
                fit={"cover"}
                align="left"
                width={700}
                height={550}
              /> */}
            </Box>
          </HStack>
        </Box>
      </IsHoverProvider>
    </>
  );
}

export { Top };
