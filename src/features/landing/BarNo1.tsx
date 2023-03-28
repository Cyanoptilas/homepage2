import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";

export default function BarNo1() {
  return (
    <>
      <Box width={920}>
        <VStack align="center">
          <HStack>
            <Text
              fontSize="lg"
              fontWeight="bold"
              _before={{
                content: '""',
                width: "0px",
                borderRight: "2px",
                borderStyle: "solid",
                borderColor: "#d2d2d2",
                transform: `translateX(-22%) translateY(0) rotate(-28deg)`,
              }}
              _after={{
                content: '""',
                width: "0px",
                borderLeft: "2px",
                borderStyle: "solid",
                borderColor: "#d2d2d2",
                transform: `translateX(22%) translateY(0) rotate(28deg)`,
              }}
            >
              登録社数50,000社以上。※1様々な業界の企業にご利用いただいています。
            </Text>
          </HStack>
          <HStack spacing="8">
            <Image
              src="/image/character/banner-share-no1.png"
              alt="労務管理クラウド"
              width={"33%"}
              objectFit="contain"
            ></Image>
            <Image
              src="/image/character/banner-satisfaction-no1.png"
              alt="人事労務システム"
              width={"33%"}
              objectFit="contain"
            ></Image>
            <Image
              src="/image/character/banner-talent-no1.png"
              alt="タレントマネジメントシステム"
              width={"33%"}
              objectFit="contain"
            ></Image>
          </HStack>
        </VStack>
      </Box>
    </>
  );
}

export { BarNo1 };
