import { Box, Flex, Heading, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";

const ContentsTop = [
  { label: "採用・入社", description: "自宅からスマホで\n入社手続きが完了" },
  {
    label: "月次",
    description: "移動中でも給与の確認や\nサーベイの回答ができる",
  },
  { label: "年末", description: "年末調整はカンタンな\n質問に答えるだけ" },
  { label: "人事評価", description: "シートの作成・配布、\n集計もラクラクに" },
];

const ContentsBottom = [
  {
    label: "ライフイベント",
    description: "引越、結婚などによる\n身上変更もカンタンに申請",
  },
  {
    label: "緊急時",
    description: "仕事に行けない状況でも\n見舞金などの申請が可能",
  },
  {
    label: "就業時",
    description: "お知らせや就業規則などの\n案内が受け取れる",
  },
  {
    label: "退職時",
    description: "退職後も源泉徴収票、\n給与明細の閲覧ができる",
  },
];

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
        fontWeight="700"
        color="#444"
      >
        あらゆるシーンで、自然にデータが集まる・蓄まる
      </Heading>
      <Box margin="56px auto 0" boxSizing="border-box">
        <Box display="grid" gap="32px " boxSizing="border-box">
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
            <List
              display="grid"
              gap="22px"
              gridTemplateColumns="repeat(auto-fit,calc((100% - 66px) / 4))"
            >
              {ContentsTop.map((content) => {
                return (
                  <AggregationListItem
                    key={content.label}
                    label={content.label}
                    description={content.description}
                  />
                );
              })}
            </List>
          </Box>
          <Box order="3">
            <List
              display="grid"
              gap="22px"
              gridTemplateColumns="repeat(auto-fit,calc((100% - 66px) / 4))"
            >
              {ContentsBottom.map((content) => {
                return (
                  <AggregationListItem
                    key={content.label}
                    label={content.label}
                    description={content.description}
                  />
                );
              })}
            </List>
          </Box>
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
    <ListItem
      display="flex"
      flexDirection="column"
      listStyleType="none"
      boxSizing="border-box"
    >
      <Box display="flex">
        <Heading
          as="h5"
          position="relative"
          zIndex="1"
          bottom="-1px"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          background="#12abb1"
          borderRadius="8px 8px 0 0"
          height="36px"
          margin="0"
          padding="0 20px"
          color="#fff"
          fontSize="18px"
        >
          {label}
        </Heading>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
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
        >
          {description.split(/(\n)/).map((item) => {
            return (
              <React.Fragment key={item}>
                {item.match(/\n/) ? <br /> : item}
              </React.Fragment>
            );
          })}
        </Text>
      </Box>
    </ListItem>
  );
}

export { Section02 };
