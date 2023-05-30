import { Box, Button, Heading, List, ListItem } from "@chakra-ui/react";

const ContentsFunctionTop = [
  {
    label: "入社手続き・雇用契約",
    iconHref: "./image/icon/icon_agreement_blue.svg",
  },
  { label: "文書配布", iconHref: "./image/icon/icon_distribution_blue.svg" },
  { label: "年末調整", iconHref: "./image/icon/icon_nencho_blue.svg" },
  {
    label: "マイナンバー管理",
    iconHref: "./image/icon/icon_my-number_blue.svg",
  },
  { label: "申請・承認機能", iconHref: "./image/icon/icon_approval_blue.svg" },
  { label: "お知らせ掲示板", iconHref: "./image/icon/icon_notice_blue.svg" },
  { label: "予約管理", iconHref: "./image/icon/icon_reserve_blue.svg" },
  { label: "Web給与明細", iconHref: "./image/icon/icon_salary_blue.svg" },
  {
    label: "外部連携サービス",
    iconHref: "./image/icon/icon_cooperation_blue.svg",
  },
  {
    label: "CSVカスタムダウンロード",
    iconHref: "./image/icon/icon_csv_blue.svg",
  },
  { label: "多言語対応機能", iconHref: "./image/icon/icon_language_blue.svg" },
];

const ContentsFunctionBottom = [
  {
    label: "従業員データベース",
    iconHref: "./image/icon/icon_database_blue.svg",
  },
  { label: "人事評価", iconHref: "./image/icon/icon_evaluation_blue.svg" },
  {
    label: "配置シミュレーション",
    iconHref: "./image/icon/icon_simulation_blue.svg",
  },
  { label: "従業員サーベイ", iconHref: "./image/icon/icon_survey_blue.svg" },
  {
    label: "ラクラク分析レポート",
    iconHref: "./image/icon/icon_report_blue.svg",
  },
  { label: "カスタム社員名簿", iconHref: "./image/icon/icon_meibo_blue.svg" },
  { label: "組織図", iconHref: "./image/icon/icon_organization_blue.svg" },
];

function FunctionsArea() {
  return (
    <Box as="section" background="#fff" padding="80px 20px 0" display="block">
      <Box
        maxWidth="1160px"
        margin="0 auto"
        position="relative"
        display="block"
      >
        <Box display="block">
          <Heading
            as="h2"
            fontSize="32px"
            fontWeight="700"
            textAlign="center"
            lineHeight="1.5"
            color="#444"
          >
            SmartHRの機能一覧
          </Heading>
        </Box>
        <Box>
          <Box as="section" margin="40px 0 0" display="block">
            <Box>
              <Heading
                as="h3"
                display="block"
                fontSize="24px"
                fontWeight="700"
                lineHeight="1.4"
                color="#444"
                margin="0 0 20px"
                padding="0"
              >
                人事・労務管理
              </Heading>
              <Box boxSizing="border-box">
                <List
                  display="grid"
                  placeContent="center"
                  gap="24px"
                  gridTemplateColumns="repeat(auto-fit,calc((100% - 72px) / 4))"
                  margin="0"
                >
                  {ContentsFunctionTop.map((content) => {
                    return (
                      <CustomListItemFunction
                        key={content.label}
                        label={content.label}
                        iconHref={content.iconHref}
                      />
                    );
                  })}
                </List>
              </Box>
            </Box>
          </Box>
          <Box as="section" margin="40px 0 0" display="block">
            <Box>
              <Heading
                as="h3"
                display="block"
                fontSize="24px"
                fontWeight="700"
                lineHeight="1.4"
                color="#444"
                margin="0 0 20px"
                padding="0"
              >
                タレントマネジメント
              </Heading>
              <Box boxSizing="border-box">
                <List
                  display="grid"
                  placeContent="center"
                  gap="24px"
                  gridTemplateColumns="repeat(auto-fit,calc((100% - 72px) / 4))"
                  margin="0"
                >
                  {ContentsFunctionBottom.map((content) => {
                    return (
                      <CustomListItemFunction
                        key={content.label}
                        label={content.label}
                        iconHref={content.iconHref}
                      />
                    );
                  })}
                </List>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box marginTop="48px" display="flex" justifyContent="center">
          <Button
            as="a"
            href="https://smarthr.jp/contact/"
            width="224px"
            height="52px"
            fontSize="16px"
            fontWeight="700"
            background="#f69c2f"
            color="#fff"
            borderRadius="100px"
            _hover={{
              backgroundColor: "#f6b12f",
              boxShadow: "0 5px 8px 2px rgba(0,0,0,.14)",
              transform: "translateY(-1px)",
            }}
          >
            お問い合わせはこちら
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

interface CustomListItemFunctionProps {
  label: string;
  iconHref: string;
  href?: string;
}

function CustomListItemFunction({
  label,
  iconHref,
  href,
}: CustomListItemFunctionProps) {
  return (
    <ListItem listStyleType="none">
      <Box
        as="a"
        href={href}
        display="block"
        position="relative"
        boxSizing="border-box"
        overflow="hidden"
        background="#fff"
        borderRadius="6px"
        transition="box-shadow .3s ease"
        cursor="pointer"
        color="#1cbac8"
        _before={{
          content: "''",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "1",
          backgroundColor: "#00c4cc",
          width: "100%",
          height: "6px",
          color: "#1cbac8",
        }}
        _hover={{
          color: "#333",
          boxShadow: "0 8px 16px rgba(0,0,0,.1)",
        }}
      >
        <Box
          as="span"
          display="flex"
          alignItems="center"
          border="2px solid #e8e5de"
          borderRadius="6px"
          padding="6px 16px 0"
          height="64px"
        >
          <Box
            as="span"
            display="flex"
            alignItems="center"
            gap="12px"
            color="#333"
            fontSize="16px"
            fontWeight="700"
            _before={{
              content: "''",
              background: "no-repeat 50%",
              backgroundImage: `url(${iconHref})`,
              backgroundSize: "auto 26px",
              width: "26px",
              height: "26px",
            }}
          >
            {label}
          </Box>
        </Box>
      </Box>
    </ListItem>
  );
}

export { FunctionsArea };
