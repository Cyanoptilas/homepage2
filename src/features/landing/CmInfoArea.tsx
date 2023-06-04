import { Box, Button, Heading, Text } from "@chakra-ui/react";

function CmInfoArea() {
  return (
    <Box
      marginTop="-50px"
      padding="30px 20px 100px"
      position="relative"
      textAlign="center"
      width="100%"
    >
      <Box
        padding="0!important"
        boxSizing="border-box"
        margin="0 auto"
        maxWidth="1200px"
        width="100%"
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
          CM情報
        </Heading>
        <Box margin="30px 0 0">
          <Box
            as="a"
            href="https://smarthr.jp/cm/"
            position="relative"
            boxSizing="border-box"
            background="#f8f7f6"
            border="1px solid #e5e5e5"
            borderRadius="8px"
            maxWidth="1200px"
            margin="auto"
            padding="40px 100px"
            willChange="box-shadow,transform"
            display="flex"
            alignItems="center"
            justifyContent="center"
            _hover={{
              boxShadow: "0 7px 20px rgba(0,0,0,.1)",
              transform: "translateY(-1px)",
            }}
          >
            <Box
              gap="16px 59px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _before={{
                content: "''",
                width: "380px",
                height: "220px",
                background: "no-repeat 50%",
                backgroundSize: "cover",
                backgroundImage: "url(./image/picture/img_cm_thumbnail.png)",
              }}
            >
              <Box flex="1" position="relative" display="block">
                <Text
                  color="#4c4c4c"
                  fontSize="28px"
                  fontWeight="700"
                  textAlign="left"
                  lineHeight="1.6"
                  marginBottom="0"
                  margin="0 0 20px"
                >
                  社員に、いい。SmartHR
                </Text>
                <Text
                  margin="11px 0 0"
                  color="#444"
                  fontSize="16px"
                  textAlign="left"
                  lineHeight="1.9"
                >
                  木梨さん、伊藤さん主演のテレビCMやプロモーション動画を公開中です。SmartHRはなぜ社員にいいのか？をご紹介します。
                </Text>
                <Box
                  margin="40px 0 10px"
                  justifyContent="left"
                  gap="20px 32px"
                  display="flex"
                  alignItems="center"
                >
                  <Button
                    width="280px"
                    height="52px"
                    pointerEvents="none"
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    maxWidth="unset"
                    margin="0"
                    padding="14px 32px"
                    fontSize="16px"
                    fontWeight="700"
                    lineHeight="1.5"
                    background="#f69c2f"
                    color="#fff!important"
                    borderRadius="100px"
                  >
                    CM情報を見る
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          margin="50px 0 0"
          gap="20px 32px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            as="a"
            href="https=//smarthr.jp/cm/"
            maxWidth="373px"
            position="relative"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            boxSizing="border-box"
            background="#fff"
            border="2px solid #e5e5e5"
            borderRadius="10em"
            width="100%"
            height="52px"
            margin="0"
            padding="10px 20px"
            color="#444!important"
            fontSize="16px"
            fontWeight="700"
            textAlign="center"
            lineHeight="1.3"
            cursor="pointer"
            _after={{
              width: "16px",
              height: "16px",
              marginRight: "13px",
              marginLeft: "12px",
              content: "''",
              display: "inline-block",
              backgroundImage: "url(./image/icon/icon_external_window.svg)",
              backgroundRepeat: "no-repeat",
            }}
          >
            その他のCMはこちら(YouTube)
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export { CmInfoArea };
