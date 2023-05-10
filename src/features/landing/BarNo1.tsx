import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";

export default function BarNo1() {
  return (
    <>
      <Box width={920}>
        <VStack align="center">
          <HStack>
            <Text
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontSize="18px"
              fontWeight="600"
              color="#4c4c4c"
              lineHeight="1.6"
              _before={{
                content: "''",
                display: "inline-block",
                height: "28px",
                width: "0",
                marginLeft: "5px",
                borderRight: "2px",
                borderStyle: "solid",
                borderColor: "#d2d2d2",
                transform: "translateX(-22px) translateY(0) rotate(-28deg)",
              }}
              _after={{
                content: '""',
                display: "inline-block",
                height: "28px",
                width: "0",
                borderLeft: "2px",
                borderStyle: "solid",
                borderColor: "#d2d2d2",
                transform: "translateX(10px) translateY(0) rotate(28deg)",
              }}
            >
              登録社数50,000社以上。
              <Box
                fontSize="10px"
                display="inline-block"
                margin="0 8px 0 -8px"
                paddingBottom="6px"
                position="relative"
                verticalAlign="baseline"
              >
                ※1
              </Box>
              様々な業界の企業にご利用いただいています。
            </Text>
          </HStack>
          <HStack spacing="8" paddingTop="7px">
            <Image
              src="/image/character/banner-share-no1.png"
              alt="労務管理クラウド"
              width={"30%"}
              objectFit="contain"
            ></Image>
            <Image
              src="/image/character/banner-satisfaction-no1.png"
              alt="人事労務システム"
              width={"30%"}
              objectFit="contain"
            ></Image>
            <Image
              src="/image/character/banner-talent-no1.png"
              alt="タレントマネジメントシステム"
              width={"30%"}
              objectFit="contain"
            ></Image>
          </HStack>
        </VStack>
      </Box>
    </>
  );
}

export { BarNo1 };
