import { Box, Heading, Image, Text } from "@chakra-ui/react";

function OthersArea() {
  return (
    <Box
      as="aside"
      marginTop="-20px"
      maxWidth="1026px"
      margin="auto"
      display="block"
    >
      <Box as="section" display="flex" gap="0 64px" margin="50px 20px 0">
        <Box maxWidth="464px" position="relative" display="block">
          <Heading
            as="h2"
            fontSize="28px"
            fontWeight="700"
            lineHeight="1.5"
            color="#444"
            margin="0 0 20px"
            padding="0"
          >
            SmartHRユーザー限定の
            <br />
            コミュニティやイベントも充実！
          </Heading>
          <Box margin="16px 0 0">
            <Text
              fontSize="16px"
              lineHeight="1.8"
              marginBottom="0"
              margin="0 0 20px"
              color="#4c4c4c"
            >
              SmartHRなら人事・労務担当者同士が交流できるコンテンツが
              <br />
              充実。人事・労務に関する日ごろの疑問やお悩み解消、さらなるSmartHR活用方法など、様々なシーンでユーザーの皆さまに寄
              <br />
              り添ったコンテンツをお届けします。
            </Text>
            <Text
              margin="16px 0 0"
              color="#23221f"
              fontSize="11px"
              lineHeight="1.5"
            >
              ※コミュニティサイト(PARK
              online)は、現在ベータ版のため招待ユーザーさまのみのご案内となります。
            </Text>
          </Box>
        </Box>
        <Box as="figure">
          <Image
            src="./image/picture/img_park_outline.png"
            alt="img_park_outline"
            height="auto"
            maxWidth="100%"
          />
        </Box>
      </Box>
    </Box>
  );
}

export { OthersArea };
