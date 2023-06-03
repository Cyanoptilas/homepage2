import { Box, Heading, List, ListItem } from "@chakra-ui/react";

function InformationArea() {
  const bar = {
    content: "' '",
    display: "block",
    height: "0",
    overflow: "hidden",
    visibility: "hidden",
    width: "0",
    color: "#4c4c4c",
  };

  return (
    <Box marginTop="64px">
      <Box
        borderTop="1px solid #e5e5e5"
        padding="75px 0 10px"
        backgroundColor="#fff"
        margin="auto"
        maxWidth="1200px"
      >
        <Box
          position="relative"
          width="780px"
          boxSizing="border-box"
          margin="0 auto"
          maxWidth="1200px"
        >
          <Heading
            as="h2"
            fontSize="30px"
            fontWeight="700"
            color="#444"
            lineHeight="1.4"
            margin="0 0 20px"
            padding="0"
          >
            お知らせ
          </Heading>
          <Box
            as="a"
            href="https://smarthr.jp/news"
            color="#555"
            fontWeight="700"
            position="absolute"
            right="0"
            top="10px"
          >
            一覧
          </Box>
          <Box _before={bar} _after={bar}>
            <List
              borderTop="1px solid #d8d8d8"
              margin="0"
              boxSizing="border-box"
              listStyleType="square outside"
            >
              <CustomListItem
                date="2023-06-02"
                title="2023年5月アップデートまとめ｜【分析レポート】令和5年版の様式に対応した高年齢者・障害者雇用状況報告書のプリセットレポートを作成できるようになりました"
              />
              <CustomListItem
                date="2023-05-32"
                title="従業員情報の一括更新にて1名の従業員に対し複数の適用日を指定して更新できるようになりました"
              />
              <CustomListItem
                date="2023-05-31"
                title="【組織図】組織図の作成・編集がSmartHR基本機能の管理者以外でも可能になります"
              />
              <CustomListItem
                date="2023-05-29"
                title="変更済【配置シミュレーション】配置プロジェクトへの部署・従業員情報同期の仕様を変更しました"
              />
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

interface CustomListItemProps {
  date: string;
  title: string;
}

function CustomListItem({ date, title }: CustomListItemProps) {
  return (
    <ListItem
      borderBottom="1px solid #d8d8d8"
      padding="25px 0"
      width="100%"
      listStyleType="none"
    >
      <Box
        as="a"
        href="/"
        alignItems="center"
        color="#555"
        display="flex"
        padding="0 20px"
        transition="all .2s ease"
        outline="0"
        textDecoration="none"
      >
        <Box as="span" marginRight="20px" maxWidth="100px" width="100%">
          {date}
        </Box>
        <Heading
          as="h4"
          marginBottom="0"
          textDecoration="underline"
          fontSize="16px"
          color="#444"
          fontWeight="400"
          lineHeight="1.4"
          // margin="0 0 20px"
          padding="0"
        >
          {title}
        </Heading>
      </Box>
    </ListItem>
  );
}

export { InformationArea };
