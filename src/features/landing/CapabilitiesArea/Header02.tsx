import { Box, Heading, Text } from "@chakra-ui/react";

function Header02() {
  return (
    <Heading
      display="flex"
      alignItems="center"
      backgroundRepeat="no-repeat"
      backgroundSize="auto 540px"
      height="540px"
      margin="0"
      padding="0"
      flexDirection="row-reverse"
      backgroundPosition="2"
      backgroundImage="url(./image/picture/img_capabilities_sections_centralize.png)"
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
        _before={{
          content: "'02'",
          color: "#00c4cc",
          display: "block",
          marginBottom: "10px",
          fontSize: "90px",
          lineHeight: "1",
        }}
      >
        <Heading as="h2">
          最新の人事データが自然に集まり、
          <Heading as="span" color="#00c4cc" fontStyle="normal">
            一元管理
          </Heading>
          できる。
        </Heading>
        <Text
          margin="24px 0 0"
          fontSize="16px"
          lineHeight="1.8"
          fontWeight="400"
          color="#4c4c4c;"
        >
          住所変更や扶養変更など、あらゆるシーンで必要な労務の手続きがSmartHRで完結。自動でデータベースが更新されます。従業員情報が自然に集約されるので、常に最新で間違いのない人事データをカンタンに一元管理できます。
        </Text>
      </Box>
    </Heading>
  );
}

export { Header02 };
