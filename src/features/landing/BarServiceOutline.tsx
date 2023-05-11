import {
  Flex,
  Box,
  Text,
  Image,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

function BarServiceOutline() {
  return (
    <Flex overflow="hidden" backgroundColor="#f4f8f9">
      <Flex
        boxSizing="border-box"
        paddingTop="80px"
        maxWidth="1366px"
        display="block"
        margin="0 auto 80px"
      >
        <Flex
          boxSizing="border-box"
          position="relative"
          width="1280px"
          marginLeft="-16px"
          marginRight="100px"
          backgroundColor="#fff"
          borderRadius="4px"
          boxShadow="0 8px 20px rgba(0,0,0,.1)"
        >
          <Flex //image
            boxSizing="border-box"
            position="absolute"
            top="52px"
            right="-244px"
            width="800px"
            height="450px"
          >
            <Image
              src="/image/picture/img_service_outline.png"
              alt="img_service_outline"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </Flex>
          <Flex //description
            boxSizing="border-box"
            padding="46px 560px 44px 83px"
          >
            <VStack align={"left"}>
              <Box
                color="#4c4c4c"
                fontWeight="700"
                fontSize="32px"
                lineHeight="1.8"
              >
                <Text>SmartHRひとつで、</Text>
                <Text>
                  人事・労務の
                  <Text
                    as="span"
                    color={useColorModeValue("#00c4cc", "gray.800")}
                  >
                    業務効率化
                  </Text>
                  も
                </Text>
                <Text>
                  データ活用による
                  <Text
                    as="span"
                    color={useColorModeValue("#00c4cc", "gray.800")}
                  >
                    組織改善
                  </Text>
                  も実現します。
                </Text>
              </Box>

              <Text
                marginRight="60px"
                marginTop="26px"
                paddingTop="14px"
                fontWeight="500"
                fontSize="16px"
                lineHeight="1.8"
                color="#4e4c49"
              >
                人事・労務業務を効率化しながら自然と蓄まった人事データを一元管理。
                <br />
                さらに、蓄まったデータを活かすことで、効果的で納得感のある人材マネジメントや組織のパフォーマンス向上へと繋げることができます。
                <br />
                <br />
                「すべての人が気持ちよく働ける」社会を目指して、SmartHRは人事・労務業務の効率化から人材マネジメントまで、シームレスに実現します。
              </Text>
            </VStack>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export { BarServiceOutline };
