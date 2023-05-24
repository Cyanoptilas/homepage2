import { Box, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

function Annotation() {
  return (
    <>
      <Box
        opacity=".75"
        fontFamily="YuGo-Medium,sans-serif"
        fontSize="12px"
        color="#545454"
        letterSpacing="0"
        lineHeight="18px"
        marginBottom="26px"
      >
        <Box
          box-sizing="border-box"
          margin="0 auto"
          maxWidth="1200px"
          width="100%"
        >
          <Text marginBottom="0">
            ※1
            SmartHR上で事業所登録を完了しているテナント数（但し、退会処理を行ったテナント数を除く）
            <Link
              href="https://mic-r.co.jp/mr/02640/|https://mic-r.co.jp/mr/02640/"
              target="_blank"
              _hover={{ color: "#333", textDecoration: "underline" }}
            >
              ※2 デロイト トーマツ
              ミック経済研究所「HRTechクラウド市場の実態と展望
              2022年度版」労務管理クラウド市場・出荷金額（2022年度見込）
            </Link>
            ※3 株式会社マクロミル（委託調査）2020年12月
            クラウド型人事労務システムを運用・管理中の1,800名を対象に調査 ※4
            ITreviewカテゴリーレポート「タレントマネジメント」（2022 Summer）
          </Text>
        </Box>
      </Box>
    </>
  );
}

export { Annotation };
