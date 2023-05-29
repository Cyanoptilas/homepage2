import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Contents = [
  {
    label: "人事評価",
    iconHref: "./image/picture/icon_evaluation_blue.svg",
    description: "蓄まった従業員情報を活用して\n効率的な人事評価を実施",
    imageHref: "./image/picture/img_function_evaluation.png",
  },
  {
    label: "配置シミュレーション",
    iconHref: "./image/picture/icon_simulation_blue_s.svg",
    description: "従業員情報を活用しながら\n最適な人員配置を支援",
    imageHref: "./image/picture/img_function_simulation.png",
  },
  {
    label: "従業員サーベイ",
    iconHref: "./image/picture/icon_survey_blue.svg",
    description: "目的に合わせたアンケートで\n組織課題の発見を支援",
    imageHref: "./image/picture/img_function_survey.png",
  },
  {
    label: "ラクラク分析レポート",
    iconHref: "./image/picture/icon_report_blue.svg",
    description: "組織改善に必要な重要指標を\nかんたんに可視化・分析",
    imageHref: "./image/picture/img_function_report.png",
  },
];

const ContentsEffects = [
  "採用",
  "人材育成",
  "人身配置",
  "制度改定",
  "人材抜擢",
  "組織開発",
];

function Section03() {
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
        カンタンにはじめられる機能が充実
      </Heading>

      <Box boxSizing="border-box" margin="56px auto 0">
        <List margin="0" display="flex" justifyContent="center" gap="40px 24px">
          {Contents.map((content) => {
            return (
              <CustomListItem
                key={content.label}
                label={content.label}
                iconHref={content.iconHref}
                description={content.description}
                imageHref={content.imageHref}
              />
            );
          })}
        </List>
        <Box
          position="relative"
          margin="72px auto 0"
          _before={{
            content: "''",
            position: "absolute",
            top: "-52px",
            left: "50%",
            background:
              "url(./image/picture/icon_arrow_bottom.svg) no-repeat 50%",
            backgroundSize: "cover",
            width: "16px",
            height: "32px",
            transform: "translateX(-50%)",
          }}
        >
          <Box
            gap="20px 32px"
            background="#f4f8f9"
            borderRadius="8px"
            padding="24px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            _after={{
              content: "''",
              display: "block",
              background:
                "url(./image/picture/img_organizational_improvement.svg) no-repeat 50%",
              backgroundSize: "cover",
              width: "156px",
              height: "76px",
            }}
          >
            <Box position="relative" display="block">
              <Heading
                display="block"
                margin="0"
                padding="0"
                fontSize="24px"
                textAlign="center"
                lineHeight="1.5"
                // fontSize="18px"
                fontWeight="700"
                color="#444"
              >
                効果的なタレントマネジメント施策で、組織改善を実現
              </Heading>
              <List
                display="flex"
                flexWrap="wrap"
                gap="10px 8px"
                margin="10px auto 0"
              >
                {ContentsEffects.map((content) => {
                  return (
                    <ListItem
                      key={content}
                      background="#fff"
                      borderRadius="2px"
                      height="22px"
                      padding="0 10px"
                      color="#378487"
                      fontSize="14px"
                      fontWeight="700"
                      lineHeight="1"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      {content}
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          </Box>
        </Box>
        <Box as="aside" margin="80px 0 0">
          <Box
            as="a"
            href="https://smarthr.jp/resources/ebook_90"
            target="_blank"
            position="relative"
            boxSizing="border-box"
            background="#f8f7f6"
            border="1px solid #e5e5e5"
            borderRadius="8px"
            maxWidth="880px"
            margin="auto"
            padding="42px 60px"
            willChange="box-shadow,transform"
            display="flex"
            alignItems="center"
            justifyContent="center"
            _hover={{
              color: "#333",
              boxShadow: "0 7px 20px rgba(0,0,0,.1)",
              transform: "translateY(-1px)",
            }}
          >
            <Box
              position="absolute"
              zIndex="1"
              top="0"
              left="0"
              background="#00c4cc"
              border="2px solid #00c4cc"
              borderRadius="8px 0"
              width="130px"
              height="31px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text
                as="h2"
                margin="0"
                padding="0"
                color="#fff!important"
                fontSize="15px"
                fontWeight="700"
                lineHeight="1.4"
              >
                お役立ち資料
              </Text>
            </Box>
            <Box
              gap="10px 18px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _before={{
                content: '""',
                background: "no-repeat 50%",
                backgroundSize: "cover",
                backgroundImage:
                  "url(./image/picture/img_useful_documents2.png)",
                width: "360px",
                height: "113px",
              }}
            >
              <Box position="relative" display="block">
                <Heading
                  color="#444"
                  fontSize="20px"
                  fontWeight="700"
                  textAlign="center"
                  lineHeight="1.5"
                  marginBottom="0"
                >
                  SmartHRで、
                  <Text
                    as="strong"
                    color="#00c4cc"
                    fontStyle="normal"
                    fontSize="20px"
                    fontWeight="700"
                  >
                    タレントマネジメント
                  </Text>
                  も
                  <br />
                  <Text
                    as="strong"
                    color="#00c4cc"
                    fontStyle="normal"
                    fontSize="20px"
                    fontWeight="700"
                  >
                    労務業務の効率化
                  </Text>
                  も推進できる理由とは？
                </Heading>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Button
                    width="256px"
                    height="44px"
                    pointerEvents="none"
                    gap="0 5px"
                    fontSize="16px"
                    fontWeight="700"
                    lineHeight="1.8"
                    background="#f69c2f"
                    color="#fff!important"
                    margin="12px 0 0"
                    borderRadius="100px"
                    boxSizing="border-box"
                    textAlign="center"
                    textDecoration="none!important"
                    _after={{
                      backgroundImage: "url(./image/picture/icon_download.svg)",
                      content: "''",
                      backgroundSize: "cover",
                      width: "16px",
                      height: "16px",
                    }}
                  >
                    資料ダウンロード
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            margin="48px 0 0"
            gap="20px 32px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Button
              variant="customOutline"
              as="a"
              href="https://smarthr.jp/hr-management/"
              w="352px"
              h="56px"
              fontSize="16px"
              fontWeight="700"
              lineHeight="1.5"
              padding="14px 32px"
              _before={{}}
            >
              SmartHRではじめる人材マネジメント
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

interface Props {
  label: string;
  iconHref: string;
  description: string;
  imageHref: string;
}

function CustomListItem({ label, iconHref, description, imageHref }: Props) {
  return (
    <ListItem flex="1" maxWidth="320px" margin="0" listStyleType="none">
      <Heading
        as="h4"
        position="relative"
        gap="0 8px"
        color="#444"
        fontSize="20px"
        fontWeight="700"
        display="flex"
        lineHeight="1.4"
        margin="0 0 20px"
        padding="0"
        justifyContent="center"
        _before={{
          content: "''",
          width: "26px",
          height: "26px",
          backgroundImage: `url(${iconHref})`,
          backgroundSize: "Auto 26px",
        }}
      >
        {label}
      </Heading>
      <Box>
        <Text
          fontSize="16px"
          textAlign="center"
          lineHeight="1.5"
          marginBottom="0"
          margin="0 0 20px"
        >
          {description.split(/(\n)/).map((item) => {
            return (
              <React.Fragment key={item}>
                {item.match(/\n/) ? <br /> : item}
              </React.Fragment>
            );
          })}
        </Text>
        <Box
          margin="24px auto 0"
          textAlign="center"
          lineHeight="1"
          display="block"
        >
          <Image
            src={imageHref}
            alt={label}
            border="1px solid #d1d1d1"
            height="auto"
            maxWidth="100%"
          />
        </Box>
      </Box>
    </ListItem>
  );
}

export { Section03 };
