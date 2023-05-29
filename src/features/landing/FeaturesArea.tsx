import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

function FeaturesArea() {
  return (
    <Box boxSizing="border-box">
      <Box
        as="section"
        padding="72px 30px 143px"
        background="url(./image/picture/img_introduction_to_service.png) #f4f8f9 no-repeat"
        backgroundPosition="bottom"
        backgroundSize="558px auto"
        display="block"
      >
        <Box position="relative" display="block">
          <Box display="block">
            <Heading
              as="h2"
              margin="0"
              padding="0"
              fontWeight="700"
              textAlign="center"
              lineHeight="1.5"
              fontSize="24px"
              color="#444"
            >
              SmartHRなら、集まる・蓄まる・活用できる
            </Heading>
          </Box>
          <Box margin="20px 0 0" boxSizing="border-box">
            <Text
              textAlign="center"
              marginBottom="0"
              margin="0 0 20px"
              color="#4c4c4c"
              fontStyle="inherit"
              lineHeight="1.8"

            >
              労働人口不足が予測されている近年の日本では、
              <br />
              「組織の生産性向上」や「選ばれる組織づくり」が重要視されています。
              <br />
              自然と人事データが集まる・蓄まる・活用できる、SmartHRで、
              <br />
              人事・労務業務の効率化とタレントマネジメントの第一歩をはじめませんか？
            </Text>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxSizing="border-box"
            >
              <Button
                variant="customOutline"
                as="a"
                width="280px"
                height="56px"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                // width="auto"
                maxWidth="unset"
                margin="0"
                padding="14px 32px"
                fontSize="16px"
                fontWeight="700"
                lineHeight="1.5"
                background="#fff"
                border="2px solid #e5e5e5"
                color="#4c4c4c"
              >
                SmartHRの特徴
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export { FeaturesArea };
