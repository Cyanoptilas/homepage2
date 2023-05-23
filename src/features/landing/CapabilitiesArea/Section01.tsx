import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { ButtonDownloadDocs } from "./ButtonDownloadDocs";

function Section01() {
  return (
    <Box display="block" margin="64px 0 0">
      <Heading
        as="h3"
        display="block"
        margin="0"
        padding="0"
        fontSize="28px"
        textAlign="center"
        lineHeight="1.5"
      >
        ペーパーレス化で、大幅な工数削減が実現
      </Heading>
      <Box boxSizing="border-box" margin="56px auto 0">
        <Flex
          gap="0 38px"
          background="#f4f8f9"
          borderRadius="8px"
          margin="0 auto"
          padding="30px 70px"
          color="#444"
        >
          <Box display="flex" alignItems="center" justifyContent="center">
            <Box
              position="relative"
              background="url(./image/picture/img_effect_total.svg)"
              backgroundSize="cover"
              width="180px"
              height="180px"
            >
              <Text fontWeight="700" textAlign="center" marginTop="42px">
                <Heading as="span" fontSize="14px">
                  合計工数を
                </Heading>
                <br />
                <Heading as="span" fontSize="16px">
                  約
                </Heading>
                <Heading
                  as="span"
                  fontSize="63px"
                  letterSpacing="-.03em"
                  fontFamily="Roboto,YuGothic"
                  fontStyle="normal"
                  fontWeight="700"
                  lineHeight="1"
                >
                  88
                </Heading>
                <Heading as="span" fontSize="33px">
                  %
                </Heading>
                <br />
                <Heading as="span" fontSize="22px" lineHeight=".9">
                  削減
                </Heading>
              </Text>
            </Box>
          </Box>
          <Flex boxSizing="border-box" flex="1">
            <HStack gap="25px 16px">
              <CustomListItem
                label="入社手続き"
                num={76}
                hours1={612}
                hours2={148}
              />
              <CustomListItem
                label="雇用契約"
                num={66}
                hours1={342}
                hours2={115}
              />
              <CustomListItem
                label="Web給与明細"
                num={99}
                hours1={1413}
                hours2={20}
              />
              <CustomListItem
                label="年末調整"
                num={87}
                hours1={1971}
                hours2={264}
              />
              <CustomListItem label="人事評価" num={33} hours1={3} hours2={2} />
            </HStack>
          </Flex>
        </Flex>
        <Text marginTop="8px" color="#444" fontSize="12px" lineHeight="1.5">
          ※削減時間の数値はSmartHRをご利用中の企業のご利用状況、従業員構成比等を参考に、1,000名規模企業を想定して算出しています。
        </Text>
        <Box boxSizing="border-box" margin="56px 0 0">
          <Heading
            as="h3"
            display="block"
            margin="auto"
            padding="0"
            fontSize="16px"
            textAlign="center"
            lineHeight="1.5"
            fontWeight="700"
          >
            SmartHRの機能や導入メリットがすぐわかる！サービス資料3点セット
          </Heading>
          <Box boxSizing="border-box" textAlign="center">
            <ButtonDownloadDocs />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

interface Props {
  label: string;
  num: number;
  hours1: number;
  hours2: number;
}

function CustomListItem({ label, num, hours1, hours2 }: Props) {
  return (
    <Box
      boxSizing="border-box"
      listStyleType="none"
      width="calc((100% - 80px) / 5)"
      minWidth="150px"
    >
      <Heading
        as="h4"
        display="box"
        background="#fff"
        margin="auto"
        padding="6px 20px"
        fontSize="18px"
        fontWeight="700"
        textAlign="center"
        lineHeight="1.3"
        color="#444"
      >
        {label}
      </Heading>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        marginTop="16px"
      >
        <Text
          display="flex"
          alignItems="center"
          fontWeight="700"
          lineHeight="1"
          marginBottom="0"
          margin="0 0 20px"
          _before={{
            content: "''",
            display: "block",
            background: "url(./image/picture/icon_arrow_bottom_s.svg)",
            width: "15px",
            height: "27px",
            marginRight: "8px",
            fontWeight: "700",
            lineHeight: "1",
          }}
        >
          <Heading
            as="span"
            position="relative"
            display="block"
            border="0"
            fontStyle="inherit"
            fontSize="100%"
            margin="0"
            padding="0"
            verticalAlign="baseline"
          >
            <Heading
              as="span"
              fontSize="40px"
              fontFamily="Roboto,YuGothic"
              letterSpacing="-.03em"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="1"
            >
              {num}
            </Heading>
            <Heading
              as="span"
              fontSize="24px"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="1"
            >
              %
            </Heading>
            <Heading as="span" fontSize="16px">
              削減
            </Heading>
          </Heading>
        </Text>
        <Text
          marginTop="15px"
          fontSize="12px"
          textAlign="center"
          lineHeight="1"
          whiteSpace="nowrap"
          marginBottom="0"
          margin="0 0 20px"
        >
          {label === "人事評価"
            ? `導入前 担当者${hours1}名 → ${hours2}名`
            : `導入前 ${hours1}h → ${hours2}h`}
        </Text>
      </Box>
    </Box>
  );
}

export { Section01 };
