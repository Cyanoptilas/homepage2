import {
  Box,
  Heading,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

export default function BarServiceOutline() {
  return (
    <>
      <Box
        height={470}
        width={1300}
        background={"white"}
        boxShadow="lg"
        paddingX={20}
        marginLeft={200}
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

            <Box maxWidth={580} paddingTop={7}>
              <Text fontSize={"md"}>
                人事・労務業務を効率化しながら自然と蓄まった人事データを一元管理。
                <br />
                さらに、蓄まったデータを活かすことで、効果的で納得感のある人材マネジメントや組織のパフォーマンス向上へと繋げることができます。
                <br />
                <br />
                「すべての人が気持ちよく働ける」社会を目指して、SmartHRは人事・労務業務の効率化から人材マネジメントまで、シームレスに実現します。
              </Text>
            </Box>
          </VStack>
          <Image
            src="/image/picture/img_service_outline.png"
            alt="img_service_outline"
            minW={800}
            objectFit="cover"
            // style={{ marginTop: 28 }}
            paddingTop={20}
          />
        </HStack>
      </Box>
    </>
  );
}
