import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";

function Availability() {
  return (
    <Box>
      <VStack>
        <Text as="b" fontSize={34} paddingY={10}>
          SmartHRができること
        </Text>
        <HStack>
          <VStack paddingX={12} align={"center"}>
            <Text as="b" fontSize={46} color={"#00c4cc"}>
              01
            </Text>
            <Text as="b" fontSize={24}>
              業務を効率化
            </Text>
            <Text fontSize={16} align="center" paddingY={2}>
              書類の回収やチェック作業の
              <br />
              工数を大幅削減
            </Text>
            <Image
              src="./image/picture/img_capabilities_index_optimize.svg"
              alt="01"
              width={200}
            />
          </VStack>
          <VStack paddingX={12}>
            <Text as="b" fontSize={46} color={"#00c4cc"}>
              02
            </Text>
            <Text as="b" fontSize={24}>
              データを一元管理
            </Text>
            <Text fontSize={16} align="center" paddingY={2}>
              必要な労務手続きが1つで完結
              <br />
              最新の人事データが、自然に集まる
            </Text>
            <Image
              src="./image/picture/img_capabilities_index_centralize.svg"
              alt="01"
              width={200}
            />
          </VStack>
          <VStack paddingX={12}>
            <Text as="b" fontSize={46} color={"#00c4cc"}>
              03
            </Text>
            <Text as="b" fontSize={24}>
              組織改善を実現
            </Text>
            <Text fontSize={16} align="center" paddingY={2}>
              蓄まったデータを、人材育成や離職防
              <br />
              止などの人材マネジメントに活用
            </Text>
            <Image
              src="./image/picture/img_capabilities_index_improve.svg"
              alt="01"
              width={200}
            />
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
}

export { Availability };
