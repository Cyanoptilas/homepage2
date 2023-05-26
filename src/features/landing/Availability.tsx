import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Contents = [
  {
    label: "業務を効率化",
    description: "書類の回収やチェック作業の\n工数を大幅削減",
    imageUrl: "./image/picture/img_capabilities_index_optimize.svg",
  },
  {
    label: "データを一元管理",
    description:
      "必要な労務手続きが1つで完結\n最新の人事データが、自然に集まる",
    imageUrl: "./image/picture/img_capabilities_index_centralize.svg",
  },
  {
    label: "組織改善を実現",
    description:
      "蓄まったデータを、人材育成や離職防止などのタレントマネジメントに活用",
    imageUrl: "./image/picture/img_capabilities_index_improve.svg",
  },
];

function Availability() {
  return (
    <Box background="#f4f8f9" height="650px" paddingBottom="920px">
      <VStack>
        <Text as="b" fontSize="34px" paddingY="10px">
          SmartHRができること
        </Text>
        <HStack gap="0 64px" paddingTop="45px">
          {Contents.map((content, index) => {
            index++;
            const num = ("00" + index).slice(-2);
            return (
              <>
                <VStack align="center">
                  <Text
                    as="b"
                    fontSize="46px"
                    color="#00c4cc"
                    padding="0 0 10px"
                  >
                    {num}
                  </Text>
                  <Text as="b" fontSize="26px">
                    {content.label}
                  </Text>

                  <Text
                    width="276px"
                    textAlign="center"
                    padding="10px 0 10px"
                    fontSize="16px"
                    lineHeight="1.8"
                  >
                    {content.description.split(/(\n)/).map((item, index) => {
                      return (
                        <React.Fragment key={index}>
                          {item.match(/\n/) ? <br /> : item}
                        </React.Fragment>
                      );
                    })}
                  </Text>

                  <Image src={content.imageUrl} alt="01" width="200px" />
                </VStack>
              </>
            );
          })}
        </HStack>
      </VStack>
    </Box>
  );
}

export { Availability };
