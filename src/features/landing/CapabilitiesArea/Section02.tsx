import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import Head from "next/head";

function Section02() {
  return (
    <Box margin="64px 0 0" display="block">
      <Heading
        as="h3"
        display="block"
        margin="0"
        padding="0"
        fontSize="28px"
        textAlign="center"
        lineHeight="1.5"
        // fontSize="18px"
        fontWeight="700"
        color="#444"
      >
        あらゆるシーンで、自然にデータが集まる・蓄まる
      </Heading>
      <Box margin="56px auto 0" boxSizing="border-box">
        <Box display="grid" gap="32px 0" boxSizing="border-box">
          <Box order="2" display="block">
            <Heading
              as="h4"
              color="#444"
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="relative"
              margin="0 auto"
              padding="0"
              fontSize="20px"
              fontWeight="700"
              textAlign="center"
              lineHeight="1.5"
              _before={{
                right: "-10px",
                backgroundImage: "url(./image/picture/img_man_using_sp.svg)",
                content: "''",
                position: "relative",
                display: "block",
                backgroundSize: "cover",
                width: "144px",
                height: "97px",
              }}
              _after={{
                backgroundImage: "url(./image/picture/img_woman_using_pc.svg)",
                content: "''",
                position: "relative",
                display: "block",
                backgroundSize: "cover",
                width: "144px",
                height: "97px",
              }}
            >
              <Flex
                gap="0 26px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                _before={{
                  content: "''",
                  display: "block",
                  background:
                    "url(./image/picture/icon_arrows_from_three_direction.svg)",
                  backgroundSize: "cover",
                  width: "48px",
                  height: "100px",
                }}
                _after={{
                  transform: "rotate(180deg)",
                  content: "''",
                  display: "block",
                  background:
                    "url(./image/picture/icon_arrows_from_three_direction.svg)",
                  backgroundSize: "cover",
                  width: "48px",
                  height: "100px",
                }}
              >
                <Text display="block" fontWeight="700">
                  効率化される中で取得されたデータが
                  <br />
                  <Heading
                    as="strong"
                    color="#00c4cc"
                    fontSize="28px"
                    fontStyle="normal"
                  >
                    SmartHR
                  </Heading>
                  <Heading as="span" fontSize="28px">
                    へ
                  </Heading>
                </Text>
              </Flex>
            </Heading>
          </Box>
          <Box order="1">
            <HStack>
                <AggregationListItem label="採用・入社" description="自宅からスマホで入社手続きが完了" />
                <AggregationListItem label="採用・入社" description="自宅からスマホで入社手続きが完了" />
                <AggregationListItem label="採用・入社" description="自宅からスマホで入社手続きが完了" />
                <AggregationListItem label="採用・入社" description="自宅からスマホで入社手続きが完了" />
            </HStack>
          </Box>
          <Box order="3">c</Box>
        </Box>
      </Box>
    </Box>
  );
}

interface Props {
  label: string;
  description: string;
}

function AggregationListItem({ label, description }: Props) {
  return (
    <Flex
      display="flex"
      flexDirection="column"
      listStyleType="none"
      boxSizing="border-box"
    >
      <Box display="flex">
        <Heading as="h5">採用・入社</Heading>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxSizing="border-box"
        flex="1"
        background="#f4f8f9"
        border="1px solid #e3eff1"
        borderRadius="0 8px 8px"
        padding="20px"
      >
        <Text
          color="#23221f"
          fontSize="16px"
          textAlign="center"
          lineHeight="1.5"
          marginBottom="0"
          margin="0 0 20px"
        >
          自宅からスマホで
          <br />
          入社手続きが完了
        </Text>
      </Box>
    </Flex>
  );
}

export { Section02 };
