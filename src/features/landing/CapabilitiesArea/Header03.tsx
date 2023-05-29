import { Box, Heading, Text } from "@chakra-ui/react";

function Header03() {
  return (
    <Heading
      display="flex"
      alignItems="center"
      backgroundRepeat="no-repeat"
      backgroundPosition="100%"
      backgroundSize="auto 540px"
      height="540px"
      margin="0"
      padding="0"
      backgroundImage="url(./image/picture/img_capabilities_sections_improve.png)"
    >
      <Box
        position="relative"
        display="block"
        boxSizing="border-box"
        boxShadow="0 7px 20px rgba(0,0,0,.1)"
        borderRadius="4px"
        background="#fff"
        maxWidth="584px"
        margin="60px 0 0"
        padding="0 72px 60px"
      >
        <Heading
          as="h2"
          marginTop="-30px"
          fontSize="32px"
          fontWeight="700"
          lineHeight="1.6"
          _before={{
            content: "'03'",
            font: "normal normal 700 10px 'Noto Sans JP'",
            color: "#00c4cc",
            display: "block",
            marginBottom: "4px",
            fontSize: "90px",
            lineHeight: "1",
            fontWeight: "700",
          }}
        >
          データの可視化・分析をカンタンに。効果的な
          <Text as="span" color="#00c4cc">
            タレントマネジメント
          </Text>
          を支援。
        </Heading>
        <Text
          margin="24px 0 0"
          fontSize="16px"
          lineHeight="1.8"
          fontWeight="400"
          color="#4c4c4c;"
        >
          データ分析の専門知識がない担当者でもわかりやすい操作性で、蓄まったデータの可視化・分析がカンタンに。人事評価・組織課題の発見など、効果的で納得感のあるタレントマネジメントを支援します。
        </Text>
      </Box>
    </Heading>
  );
}

export { Header03 };
