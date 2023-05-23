import { Box, Heading, Text } from "@chakra-ui/react";

function Header01() {
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
      marginTop="-490px"
      backgroundImage="url(./image/picture/img_capabilities_sections_optimize.png)"
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
          color="#444"
          margin="0 0 20px"
          padding="0"
          fontSize="32px"
          fontWeight="700"
          lineHeight="1.6"
          marginTop="-28px"
          _before={{
            font: "normal normal 700 10px 'Noto Sans JP'",
            content: "'01'",
            color: "#00c4cc",
            display: "block",
            marginBottom: "6px",
            fontSize: "90px",
            lineHeight: "1",
          }}
        >
          人事・労務の
          <Text as="span" color="#00c4cc">
            業務効率化
          </Text>
          を実現し、組織改善のための時間をつくり出す。
        </Heading>
        <Text
          margin="24px 0 0"
          fontSize="16px"
          fontWeight="100"
          lineHeight="1.8"
          color="#4c4c4c"
        >
          年末調整や雇用契約などの労務手続きから、人事評価まで、書類回収やチェック作業に多くの時間を取られていた、人事・労務業務をしっかり効率化。
          <br />
          組織改善を実現するための時間を作り出します。
        </Text>
      </Box>
    </Heading>
  );
}

export { Header01 };
