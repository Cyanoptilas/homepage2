import { Box, Text } from "@chakra-ui/react";

export default function Annotation1() {
  return (
    <>
      <Box maxWidth={1200}>
        <Text fontSize={"xs"}>
          ※1
          SmartHR上で事業所登録を完了しているテナント数（但し、退会処理を行ったテナント数を除く）※2
          デロイト トーマツ ミック経済研究所「HRTechクラウド市場の実態と展望
          2021年度」※3 株式会社マクロミル（委託調査）2020年12月
          クラウド型人事労務システムを運用・管理中の1,800名を対象に調査 ※4
          ITreviewカテゴリーレポート「タレントマネジメント」（2022 Summer）
        </Text>
      </Box>
    </>
  );
}
