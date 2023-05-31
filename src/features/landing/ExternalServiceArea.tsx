import { Box, keyframes, Text } from "@chakra-ui/react";

function ExternalServiceArea() {
  const scrollAnimation = keyframes`
0% {
  background-position: 0 0;
}
100% {
  background-position: -4138px 0;
}
`;

  return (
    <Box
      backgroundColor="#ecf2f3"
      padding="55px 0 20px"
      margin="84px 0 0"
      position="relative"
      textAlign="center"
      width="100%"
      _before={{
        background:
          "url(./image/picture/bg-task-relation1-cooperation.png) no-repeat 50% 0",
        backgroundSize: "1120px auto",
        content: "''",
        display: "block",
        height: "445px",
        left: "0",
        position: "absolute",
        right: "0",
        top: "-55px",
        zIndex: "1",
      }}
      _after={{
        background:
          "url(./image/picture/bg-task-relation2-cooperation.png) no-repeat 50% 0",
        backgroundSize: "cover",
        content: "''",
        display: "block",
        height: "400px",
        left: "0",
        position: "absolute",
        right: "0",
        top: "0",
        zIndex: "0",
      }}
    >
      <Box
        position="relative"
        zIndex="1"
        boxSizing="border-box"
        margin="0 auto"
        maxWidth="1200px"
        width="100%"
      >
        <Box
          as="span"
          color="#444"
          display="block"
          fontSize="24px"
          marginBottom="30px"
          position="relative"
          fontWeight="700"
          _before={{
            color: "#444",
            fontSize: "24px",
            content: "''",
            backgroundColor: "#979797",
            height: "2px",
            position: "absolute",
            top: "16px",
            left: "422px",
            transform: "rotate(60deg)",
            width: "31px",
          }}
          _after={{
            color: "#444",
            fontSize: "24px",
            content: "''",
            backgroundColor: "#979797",
            height: "2px",
            position: "absolute",
            top: "16px",
            left: "750px",
            transform: "rotate(-58deg)",
            width: "31px",
          }}
        >
          <Box as="span" margin="0 3px" fontSize="32px" color="#00c4cc">
            40
          </Box>
          以上のサービスと連携
        </Box>
        <Box
          as="h2"
          margin="0 auto"
          maxWidth="500px"
          fontSize="38px"
          fontWeight="700"
          marginBottom="5px"
          color="#444"
        >
          SmartHRを
          <Box as="span" color="#00c4cc">
            さらに便利
          </Box>
          に
        </Box>
        <Text fontSize="14px" margin="14px 0 0" fontWeight="700" lineHeight="2">
          様々な外部サービスと連携しているので、従業員情報の連携も1クリックで。
          <br />
          さらにAPIが用意されているので自社システムとのデータ連携が可能です。
          <br />
          もちろん、CSVでのデータ受け渡しもラクラク。
        </Text>
      </Box>
      <Box // Customers
        backgroundColor="#fff"
        height="98px"
        margin="48px 0 35px"
        padding="28px 0"
        position="relative"
        zIndex="1"
      >
        <Box
          animation={`${scrollAnimation} 46s linear infinite`}
          background="url(./image/picture/cooperation-logo-slide.png) repeat-x 50%"
          backgroundColor="#fff"
          backgroundSize="auto 40px"
          height="41px"
          width="100%"
        ></Box>
      </Box>
      <Box // Button
        background="#f69c2f"
        color="#fff!important"
        fontWeight="700"
        borderRadius="100px"
        boxSizing="border-box"
        display="inline-block"
        fontSize="14px"
        marginBottom="20px"
        maxWidth="240px"
        padding="18px"
        textAlign="center"
        textDecoration="none!important"
        width="100%"
        height="50.6px"
        _hover={{}}
      >
        外部連携サービス一覧
      </Box>
    </Box>
  );
}

export { ExternalServiceArea };
