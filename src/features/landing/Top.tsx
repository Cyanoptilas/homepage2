import { Box, Flex, Text, Image, VStack } from "@chakra-ui/react";
import { ButtonWhite } from "../ui/ButtonWhite";
import { ButtonUseful3Docs } from "./ButtonUseful3Docs";

function Top() {
  return (
    <>
      <Flex
        height="630px"
        background="linear-gradient(150deg,#00c4cc 50%,#00c4cc 0,#00aeb8)"
        overflow="hidden"
        justifyContent="center"
      >
        <Flex width="1420px" color="red" position="relative" zIndex="1">
          <VStack
            textAlign="center"
            justifyContent="center"
            marginLeft="130px"
            paddingTop="70px"
            paddingRight="50px"
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
            <Text
              fontWeight="700"
              fontSize="20px"
              margin="10px 0 0"
              lineHeight="1.6"
              color="#fff"
            >
              人事・労務の業務効率化から
              <br />
              タレントマネジメントまで！
            </Text>
            <Box height="3px" />
            <ButtonUseful3Docs />
            <Box height="3px" />
            <ButtonWhite
              textMain="無料で試してみる"
              url="https://smarthr.jp/signup/"
              hover={{
                top: "-1px",
                boxShadow: "0 5px 8px 2px rgba(0,0,0,.14)",
              }}
            />
          </VStack>

          <Flex
            height="560px"
            overflow="hidden"
            right="75px"
            // margin="0 0 0 100px"
          >
            <Image
              src="/image/picture/img_home01.png"
              alt="img_top"
              fit="cover"
              align="left"
              width="100%"
              maxWidth="781px"
              position="absolute"
              bottom="0"
              height="560px"
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export { Top };
