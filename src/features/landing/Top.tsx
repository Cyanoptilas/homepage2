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
          boxSizing="border-box"
          background="linear-gradient(150deg,#00c4cc 50%,#00c4cc 0,#00aeb8)"
          color="#fff"
          width="100%"
          textAlign="center"
          overflow="hidden"
          height="540px"
          position="relative"
          zIndex="1"
        >
          <HStack>
            <VStack
              justifyContent={"center"}
              marginLeft="180"
              paddingTop="70px"
            >
              <Flex>
                <Image
                  src="/image/character/syain-ni-ii.svg"
                  alt="syain-ni-ii"
                  minW="300"
                  objectFit="contain"
                  marginTop="25"
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

              <Button1
                buttonColor="orange"
                textSub="3点セットですぐわかる！"
                textMain="資料ダウンロード"
                textColor="white"
                url=""
                hover={{
                  top: "-1px",
                  boxShadow: "0 5px 8px 2px rgba(0,0,0,.14)",
                }}
              />
              <Button1
                buttonColor="white"
                textMain="無料で試してみる"
                textColor="black"
                url=""
                hover={{
                  top: "-1px",
                  boxShadow: "0 5px 8px 2px rgba(0,0,0,.14)",
                }}
              />
              <HStack></HStack>
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
