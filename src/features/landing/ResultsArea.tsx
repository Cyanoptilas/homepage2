import React from "react";
import { Box, Heading, Text, Image, Button } from "@chakra-ui/react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};

function ResultsArea() {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const top = "350px";
  const side = "70px";

  const [hovered, setHovered] = React.useState(-1);

  const Contents = [
    {
      imageHref: "./image/picture/img_welcome.jpg",
      title: "ペーパーレス化から定着率算出まで。バックオフィス強化の道のり",
      companyName: "株式会社ウェルカム",
      type: "卸売・小売",
      numberOfEmployee: "1,957名(アルバイト含む)",
    },
    {
      imageHref: "./image/picture/img_mhi.jpg",
      title: "グループ国内60,000名の展開を見据えた全社DX推進の軌跡",
      companyName: "三菱重工業株式会社",
      type: "製造業・メーカー",
      numberOfEmployee: "5,001名～",
    },
    {
      imageHref: "./image/picture/img_toyama.jpg",
      title: "創業143年。老舗グループが挑んだバックオフィス改革秘話",
      companyName: "遠山産業株式会社(遠山グループ)",
      type: "",
      numberOfEmployee: "33 / 105名(グループ)",
    },
    {
      imageHref: "./image/picture/img_lion.jpg",
      title: "年末調整は人事・労務DXの第1段。ライオン株式会社の挑戦",
      companyName: "ライオン株式会社",
      type: "製造業・メーカー",
      numberOfEmployee: "7,452名",
    },
    {
      imageHref: "./image/picture/img_zeals.jpg",
      title: "「多様な人が働ける環境をつくる」従業員サーベイを実施する背景",
      companyName: "株式会社Zeals",
      type: "IT・インターネット",
      numberOfEmployee: "304名",
    },
    {
      imageHref: "./image/picture/img_nagahama.jpg",
      title: "SmartHR導入は行政のデジタル化への第一歩。長浜市役所の挑戦",
      companyName: "長浜市役所",
      type: "その他",
      numberOfEmployee: "2,375名",
    },
  ];

  return (
    <Box
      backgroundColor="#fff"
      padding="100px 20px 0"
      position="relative"
      textAlign="center"
      width="100%"
    >
      <Box
        paddingBottom="50px"
        boxSizing="border-box"
        margin="0 auto"
        maxWidth="1200px"
        width="100%"
      >
        {/* Left Icon */}
        <Box
          as="i"
          display="block"
          cursor="pointer"
          fontSize="40px"
          position="absolute"
          left={side}
          top={top}
          zIndex={2}
          fontStyle="normal normal normal 14px/1 FontAwesome"
          onClick={() => slider?.slickPrev()}
        >
          <FontAwesomeIcon icon={faAngleLeft} size={"xs"} />
        </Box>

        {/* Right Icon */}
        <Box
          as="i"
          display="block"
          cursor="pointer"
          fontSize="40px"
          position="absolute"
          right={side}
          top={top}
          zIndex={2}
          fontStyle="normal normal normal 14px/1 FontAwesome"
          onClick={() => slider?.slickNext()}
        >
          <FontAwesomeIcon icon={faAngleRight} size={"xs"} />
        </Box>
        {/* Header */}
        <Heading
          as="h2"
          fontSize="26px"
          fontWeight="700"
          color="#444"
          lineHeight="0.8"
          margin="0 0 20px"
          padding="0"
        >
          実際の効果は？
        </Heading>
        <Box
          as="span"
          display="block"
          fontSize="36px"
          fontWeight="700"
          margin="0 0 20px"
        >
          SmartHR お客様の声
        </Box>
        <Box
          position="relative"
          height="400px"
          width="1200px"
          overflow="hidden"
        >
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />

          {/* Slider */}
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {Contents.map((content, index) => (
              <Box
                key={index}
                width="400px"
                height="400px"
                padding="0 10px"
                display="block"
                position="relative"
                onMouseOver={() => setHovered(index)}
                onMouseOut={() => setHovered(-1)}
              >
                <Box>
                  <Box
                    width="100%"
                    display="inline-block"
                    position="relative"
                    maxWidth="370px"
                  >
                    <Box
                      as="a"
                      href="/"
                      color={hovered === index ? "#00c4cc" : "#555"}
                      display="block"
                      paddingBottom="20px"
                      transition="all .2s ease"
                    >
                      <Box height="230px" overflow="hidden" width="100%">
                        <Image
                          src={content.imageHref}
                          alt={content.companyName}
                          transform={
                            hovered === index ? "scale(1.1)" : "scale(1.0)"
                          }
                          transition="all .2s ease"
                        />
                      </Box>
                      <Box
                        zIndex={100}
                        backgroundColor="#fff"
                        borderRadius="6px"
                        boxShadow="0 2px 14px 0 rgba(0,0,0,.15)"
                        height="193px"
                        margin="-50px auto 0"
                        padding="12px 22px 25px"
                        width="89.026%"
                        textAlign="center"
                        position="relative"
                      >
                        <Text
                          fontSize="18px"
                          fontWeight="700"
                          lineHeight="1.5"
                          textAlign="left"
                          marginBottom="0"
                          margin="0 0 10px"
                        >
                          {content.title}
                        </Text>
                        <Text
                          borderBottom="1px solid #d8d8d8"
                          fontSize="14px"
                          marginBottom="10px"
                          padding="20px 0 15px"
                          textAlign="left"
                          margin="0 0 14px"
                        >
                          {content.companyName}
                        </Text>
                        <Box fontSize="12px" textAlign="left" lineHeight="1.8">
                          <Text margin="0" transitionDuration=".3s">
                            業種：{content.type}
                          </Text>
                          <Text margin="0" transitionDuration=".3s">
                            従業員数：{content.numberOfEmployee}
                          </Text>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
        <Button
          as="a"
          variant="customOutline"
          width="200px"
          height="40.6px"
          margin="25px auto 0"
          padding="5px 0"
          textAlign="center"
        >
          他の導入事例を見る
        </Button>
      </Box>
    </Box>
  );
}

export { ResultsArea };
