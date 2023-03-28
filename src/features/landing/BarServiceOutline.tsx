import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

function BarServiceOutline() {
  return (
    <>
      <Flex paddingTop="80px" maxWidth="100%" margin="0 auto 80px">
        <Flex
          // height={470}
          // maxWidth={"1280px"}
          // background={"white"}
          // FlexShadow="0 8px 20px rgba(0,0,0,.1)"
          // paddingX={20}
          // marginLeft={200}
          // borderRadius="4px"
          // overflow="clip"
          position="relative"
          width="1280px"
          marginLeft="-16px"
          marginRight="100px"
          backgroundColor="#fff"
          borderRadius="4px"
          boxShadow="0 8px 20px rgba(0,0,0,.1)"
        >
          <HStack align={"top"}>
            <VStack align={"left"} minWidth={650}>
              <Heading as="h1" color="black" fontSize={32} paddingTop={10}>
                SmartHRひとつで、
              </Heading>
              <Heading as="h1" color="black" fontSize={32} paddingTop={3}>
                人事・労務の
                <Heading
                  as="span"
                  color={useColorModeValue("#00c4cc", "gray.800")}
                >
                  業務効率化
                </Heading>
                も
              </Heading>
              <Heading as="h1" color="black" fontSize={32} paddingTop={3}>
                データ活用による
                <Heading
                  as="span"
                  color={useColorModeValue("#00c4cc", "gray.800")}
                >
                  組織改善
                </Heading>
                も実現します。
              </Heading>

              <Flex maxWidth={580} paddingTop={7}>
                <Text fontSize={"md"}>
                  人事・労務業務を効率化しながら自然と蓄まった人事データを一元管理。
                  <br />
                  さらに、蓄まったデータを活かすことで、効果的で納得感のある人材マネジメントや組織のパフォーマンス向上へと繋げることができます。
                  <br />
                  <br />
                  「すべての人が気持ちよく働ける」社会を目指して、SmartHRは人事・労務業務の効率化から人材マネジメントまで、シームレスに実現します。
                </Text>
              </Flex>
            </VStack>
            <Flex
              position="absolute"
              top="52px"
              right="-244px"
              width="800px"
              height="450px"
            >
              <Image
                src="/image/picture/img_service_outline.png"
                alt="img_service_outline"
                // width={"800px"}
                // objectFit="contain"
                // // style={{ marginTop: 28 }}
                // // paddingTop={20}
                // position="relative"
                // top={50}
                // left={70}
                width="100%"
                height="100%"
                objectFit="contain"
              />
            </Flex>
          </HStack>
        </Flex>
      </Flex>
      {/* <Flex
        position="relative"
        width="1280px"
        marginLeft="-16px"
        margin-right="100px"
        background-color="#fff"
        border-radius="4px"
        Flex-shadow="0 8px 20px rgba(0,0,0,.1)"
      >
        <Image
          src="/image/picture/img_service_outline.png"
          alt="img_service_outline"
        />
      </Flex> */}
    </>
  );
}

export { BarServiceOutline };
