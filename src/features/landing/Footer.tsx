import { siteConfig } from "@/features/configs/site";
import { useState } from "react";
import { Box, Image, List, ListItem, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

function Footer() {
  const [hoveredNo, setHoveredNo] = useState(-1);

  const itemsUsefulDocs = [
    {
      title: "お役立ち資料",
      href: "https://smarthr.jp/resources",
    },
    {
      title: "ビデオライブラリ",
      href: "https://video.smarthr.jp/",
    },
  ];

  const ContentsFooterLower = [
    {
      title: "サポート",
      items: [
        { title: "ヘルプセンター", href: "https://knowledge.smarthr.jp/hc/ja" },
        { title: "SmartHRスクール", href: "https://school.smarthr.jp/" },
      ],
    },
    {
      title: "パートナー",
      items: [
        {
          title: "開発者向けAPIについて",
          href: "https://developer.smarthr.jp/",
        },
        { title: "社会保険労務士の皆さまへ", href: "https://smarthr.jp/sr" },
      ],
    },
    {
      title: "メディア",
      items: [
        { title: "SmartHR Mag.", href: "https://mag.smarthr.jp/" },
        { title: "SmartHR Tech Blog", href: "https://tech.smarthr.jp/" },
      ],
    },
    {
      title: "オンラインショップ",
      items: [{ title: "SmartHR Store", href: "https://omise.smarthr.co.jp/" }],
    },
  ];

  const BeforeArrow = (index: number = -1) => {
    return {
      content: "''",
      position: "absolute",
      width: "20px",
      height: "20px",
      top: "30%",
      right: hoveredNo === index ? "-12px" : "0px",
      transform: "translateY(-50%)",
      margin: "1px 0 0",
      backgroundImage: "url(/image/icon/icon_arrowRight_blue.svg)",
      backgroundPosition: "50%",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      transition: "right .2s",
    };
  };

  const BeforeLine = {
    content: "''",
    position: "absolute",
    width: "6px",
    height: "2px",
    backgroundColor: "#00c4cc",
    top: "0.7em",
    left: "0",
  };

  const HoverLink = {
    textDecoration: "underline",
    color: "#636363",
  };

  return (
    <Box
      as="footer"
      color="#888"
      backgroundColor="#fff"
      borderTop="1px solid #e5e5e5"
      width="100%"
      display="block"
      paddingTop="70px"
    >
      <Box
        paddingTop="70px"
        display="flex"
        margin="auto"
        width="1200px"
        padding="0 10px 30px 0"
      >
        <Box
          marginLeft="87px"
          marginRight="-40px"
          display="grid"
          gridTemplateColumns="repeat(4,1fr)"
          flex="1"
          order="2"
          marginTop="11px"
          lineHeight="1.5"
        >
          {/* GridエリアStart */}
          <Box //SmartHRとは
            as="dl"
            marginBottom="35px"
            paddingRight="44px"
            color="#555"
            fontSize="14px"
          >
            <Box
              as="dt"
              marginBottom="18px"
              pointerEvents="none"
              fontSize="16px"
              color="#444"
              fontWeight="700"
            >
              {siteConfig.mainNav[0].title}
            </Box>
            <Box
              as="dd"
              marginTop="18px"
              margin="18px 0 12px"
              position="relative"
            >
              {siteConfig.mainNav[0].items!.map((item, index) => {
                return (
                  <>
                    <Box
                      as="dl"
                      marginTop={index != 0 ? "24px" : "0"}
                      paddingTop={index != 0 ? "10px" : "0"}
                      paddingRight="0"
                      margin="0"
                      color="#555"
                      fontSize="14px"
                    >
                      <Box
                        height="auto"
                        margin="0"
                        paddingBottom="16px"
                        fontSize="14px"
                        fontWeight="700"
                        color="#444"
                      >
                        <Box
                          as="a"
                          href={item.href}
                          position="relative"
                          fontWeight="700"
                          paddingRight="28px"
                          color="#4c4c4c"
                          transition="color .2s"
                          display="inline-block"
                          width="auto"
                          padding="0 22px 10px 0"
                          onMouseOver={() => setHoveredNo(index)}
                          onMouseLeave={() => setHoveredNo(-1)}
                          _hover={{
                            color: "#00c4cc",
                            textDecoration: "underline",
                          }}
                          _before={BeforeArrow(index)}
                        >
                          {item.title}
                        </Box>
                        {item.items &&
                          item.items?.map((item, index) => {
                            return (
                              <Box
                                key={index}
                                as="dd"
                                position="relative"
                                marginTop={index != 0 ? "11px" : "0"}
                              >
                                <Box
                                  as="a"
                                  href={item.href}
                                  transition="all .2s ease"
                                  outline="0"
                                  textDecoration="none"
                                  display="block"
                                  position="relative"
                                  paddingLeft="14px"
                                  fontWeight="400"
                                  _hover={HoverLink}
                                  _before={BeforeLine}
                                >
                                  {item.title}
                                </Box>
                              </Box>
                            );
                          })}
                      </Box>
                    </Box>
                  </>
                );
              })}
            </Box>
          </Box>

          <Box //機能
            as="dl"
            gridColumnStart="span 3"
            display="grid"
            gridTemplateColumns="repeat(3,1fr)"
            padding="0"
            marginBottom="35px"
            paddingRight="44px"
            color="#555"
            fontSize="14px"
          >
            <Box
              as="dt"
              gridColumnStart="span 3"
              marginBottom="18px"
              fontSize="16px"
              color="#444"
              fontWeight="700"
            >
              {siteConfig.mainNav[1].title}
            </Box>
            <Box as="dd" gridColumnStart="span 3" position="relative">
              <Box
                as="a"
                href="https://smarthr.jp/function/"
                display="block"
                position="relative"
                paddingLeft="14px"
                fontWeight="400"
                color="#4c4c4c"
                _hover={HoverLink}
                _before={BeforeLine}
              >
                機能一覧
              </Box>
            </Box>
            {siteConfig.mainNav[1].items!.map((item, index1) => {
              return (
                <Box
                  key={item.title}
                  as="dd"
                  margin="25px 0 12px"
                  marginTop="11px"
                  position="relative"
                >
                  <Box
                    as="dl"
                    paddingRight="0"
                    margin="0"
                    color="#555"
                    fontSize="14px"
                  >
                    <Box
                      key={item.title}
                      as="dt"
                      gridColumnStart="span 3"
                      marginBottom="13px"
                      height="auto"
                      margin="0"
                      padding="0 0 12px 0"
                      fontSize="14px"
                      fontWeight="700"
                      pointerEvents="none"
                      color="#444"
                    >
                      {item.title}
                    </Box>
                    {item.items &&
                      item.items?.map((item, index2) => {
                        return (
                          <Box
                            key={item.title}
                            as="dd"
                            padding="0"
                            position="relative"
                            display="block"
                            marginInlineStart="0px"
                            marginTop={index2 != 0 ? "11px" : "0"}
                          >
                            <Box
                              as="a"
                              href={item.href}
                              display="block"
                              position="relative"
                              paddingLeft="14px"
                              fontWeight="400"
                              color="#4c4c4c"
                              _hover={HoverLink}
                              _before={BeforeLine}
                              _after={
                                index1 === 2 && index2 === 0
                                  ? {
                                      content: '""',
                                      display: "inline-block",
                                      width: "12px",
                                      height: "12px",
                                      margin: "5px 0 0 4px",
                                      paddingLeft: "10px",
                                      backgroundImage:
                                        "url(/image/icon/icon_blank_black.svg)",
                                      backgroundRepeat: "no-repeat",
                                      backgroundPosition: "50%",
                                      backgroundSize: "contain",
                                    }
                                  : {}
                              }
                            >
                              {item.title}
                            </Box>
                          </Box>
                        );
                      })}
                  </Box>
                </Box>
              );
            })}
          </Box>

          <Box //料金
            as="dl"
            marginBottom="35px"
            paddingRight="44px"
            color="#555"
            fontSize="14px"
          >
            <Box
              as="dt"
              marginBottom="18px"
              fontSize="16px"
              color="#444"
              fontWeight="700"
            >
              {siteConfig.mainNav[2].title}
            </Box>
            {siteConfig.mainNav[2].items!.map((item, index) => {
              return (
                <Box
                  key={item.title}
                  as="dd"
                  position="relative"
                  marginTop={index != 0 ? "11px" : "0"}
                >
                  <Box
                    as="a"
                    href={item.href}
                    display="block"
                    position="relative"
                    paddingLeft="14px"
                    fontWeight="400"
                    color="#4c4c4c"
                    transition="all .2s ease"
                    outline="0"
                    textDecoration="none"
                    _hover={HoverLink}
                    _before={BeforeLine}
                  >
                    {item.title}
                  </Box>
                </Box>
              );
            })}
          </Box>

          <Box //導入事例
            as="dl"
            marginBottom="35px"
            paddingRight="44px"
            color="#555"
            fontSize="14px"
          >
            <Box
              as="dt"
              marginBottom="18px"
              fontSize="16px"
              color="#444"
              fontWeight="700"
            >
              {siteConfig.mainNav[3].title}
            </Box>
            {siteConfig.mainNav[3].items!.map((item, index) => {
              return (
                <Box
                  key={item.title}
                  as="dd"
                  position="relative"
                  marginTop={index != 0 ? "11px" : "0"}
                >
                  <Box
                    as="a"
                    href={item.href}
                    display="block"
                    position="relative"
                    paddingLeft="14px"
                    fontWeight="400"
                    color="#4c4c4c"
                    transition="all .2s ease"
                    outline="0"
                    textDecoration="none"
                    _hover={HoverLink}
                    _before={BeforeLine}
                  >
                    {item.title}
                  </Box>
                </Box>
              );
            })}
          </Box>

          <Box //お役立ち資料
            as="dl"
            marginBottom="35px"
            paddingRight="44px"
            color="#555"
            fontSize="14px"
          >
            <Box
              as="dt"
              marginBottom="18px"
              fontSize="16px"
              color="#444"
              fontWeight="700"
            >
              お役立ち資料
            </Box>
            {itemsUsefulDocs.map((item, index) => {
              return (
                <Box
                  key={item.title}
                  as="dd"
                  position="relative"
                  marginTop={index != 0 ? "11px" : "0"}
                >
                  <Box
                    as="a"
                    href={item.href}
                    display="block"
                    position="relative"
                    paddingLeft="14px"
                    fontWeight="400"
                    color="#4c4c4c"
                    transition="all .2s ease"
                    outline="0"
                    textDecoration="none"
                    _hover={HoverLink}
                    _before={BeforeLine}
                  >
                    {item.title}
                  </Box>
                </Box>
              );
            })}
          </Box>

          <Box //お知らせ
            as="dl"
            marginBottom="35px"
            paddingRight="44px"
            color="#555"
            fontSize="14px"
          >
            <Box
              as="dt"
              marginBottom="18px"
              fontSize="16px"
              color="#444"
              fontWeight="700"
            >
              {siteConfig.mainNav[4].title}
            </Box>
            {siteConfig.mainNav[4].items!.map((item, index) => {
              return (
                <Box
                  key={item.title}
                  as="dd"
                  position="relative"
                  marginTop={index != 0 ? "11px" : "0"}
                >
                  <Box
                    as="a"
                    href={item.href}
                    display="block"
                    position="relative"
                    paddingLeft="14px"
                    fontWeight="400"
                    color="#4c4c4c"
                    transition="all .2s ease"
                    outline="0"
                    textDecoration="none"
                    _hover={HoverLink}
                    _before={BeforeLine}
                  >
                    {item.title}
                  </Box>
                </Box>
              );
            })}
          </Box>

          <Box //イベント
            as="dl"
            marginBottom="35px"
            paddingRight="44px"
            color="#555"
            fontSize="14px"
            marginTop="-35px"
          >
            <Box
              as="dt"
              marginBottom="18px"
              fontSize="16px"
              color="#444"
              fontWeight="700"
            >
              イベント
            </Box>
            <Box as="dd" position="relative">
              <Box
                as="a"
                href="https://smarthr.jp/event"
                display="block"
                position="relative"
                paddingLeft="14px"
                fontWeight="400"
                color="#4c4c4c"
                transition="all .2s ease"
                outline="0"
                textDecoration="none"
                _hover={HoverLink}
                _before={BeforeLine}
              >
                イベント・セミナー
              </Box>
            </Box>
          </Box>
          {/* GridエリアEnd */}
        </Box>
        <Box //Footer Main
          boxSizing="border-box"
          order="1"
          minWidth="222px"
        >
          <Box as="a" href="https://smarthr.jp/">
            <Image
              src="./image/logo/logo_smarthr.svg"
              alt="logo"
              height="auto"
              marginBottom="8px"
              width="225px"
              maxWidth="100%"
            />
          </Box>
          <Text
            color="#555"
            fontSize="14px"
            marginBottom="5px"
            margin="0 0 20px"
            lineHeight="1.8"
          >
            株式会社SmartHR
            <br />
            〒106-6217
            <br />
            東京都港区六本木3-2-1
            <br />
            住友不動産六本木グランドタワー
          </Text>
          <Box fontSize="24px" marginBottom="45px" display="flex">
            <Box
              as="a"
              href="http://facebook.com/smarthrjp"
              transition="all .2s ease"
            >
              <IconFacebook />
            </Box>
            <Box
              as="a"
              href="http://twitter.com/smarthr_jp"
              transition="all .2s ease"
              marginLeft="10px"
            >
              <IconTwitter />
            </Box>
          </Box>
          <Box marginBottom="12px" width="168px">
            <Box border="1px solid #bbb" padding="10px">
              <Box as="a" href="https://smarthr.jp/security/" display="block">
                <Image
                  src="./image/picture/img_isms.png"
                  alt="isms"
                  display="grid"
                  height="auto"
                  width="100%"
                  maxWidth="100%"
                />
              </Box>
            </Box>
            <Text margin="0" fontSize="12px" marginTop="10px" lineHeight="1.8">
              認証番号: ISA IS 0168
              <br />
              認証範囲：本社
            </Text>
          </Box>
          <Box margin="0 0 40px" width="96px" lineHeight="1">
            <Box as="a" href="https://smarthr.jp/security/" display="block">
              <Image
                src="./image/picture/img_soc2.png"
                alt="soc2"
                height="auto"
                maxWidth="100%"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box //Footer Lower
        display="flex"
        margin="auto"
        width="1200px"
        padding="0 10px"
        boxSizing="border-box"
      >
        <Box
          borderTop="1px solid #d8d8d8"
          display="flex"
          flexWrap="wrap"
          padding="35px 0"
          marginBottom="-24px"
          width="100%"
        >
          {ContentsFooterLower.map((item, index1) => {
            return (
              <Box
                key={item.title}
                as="dl"
                margin="0 48px 38px 0"
                fontSize="12px"
                color="#555"
              >
                <Box
                  as="dt"
                  float="left"
                  paddingRight="48px"
                  position="relative"
                  margin="0"
                  color="#444"
                  fontWeight="700"
                  _before={{
                    content: "''",
                    position: "absolute",
                    width: "1px",
                    height: "100%",
                    backgroundColor: "#e5e5e5",
                    top: "0",
                    right: "24px",
                    color: "#444",
                    fontWeight: "700",
                  }}
                >
                  {item.title}
                </Box>
                {item.items.map((item, index2) => {
                  return (
                    <Box
                      key={item.title}
                      float="left"
                      margin="0"
                      display="flex"
                      paddingLeft={index2 != 0 ? "20px" : "0"}
                    >
                      <Box
                        as="a"
                        href={item.href}
                        color="#555"
                        _hover={HoverLink}
                      >
                        {item.title}
                      </Box>
                      <Box paddingLeft="7px">
                        <IconArrowUpRight />
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box //Footer Bottom
        alignItems="center"
        backgroundColor="#f2f2f2"
        boxSizing="border-box"
        display="flex"
        fontSize="12px"
        lineHeight="0.5"
        padding="10px 0"
        width="100%"
      >
        <Box
          display="flex"
          margin="auto"
          width="1200px"
          alignItems="center"
          height="24px"
        >
          <List display="flex">
            <CustomListItem
              index={0}
              label="会社概要"
              href="https://smarthr.co.jp/company/"
            />
            <CustomListItem
              index={1}
              label="利用規約"
              href="https://smarthr.jp/terms"
            />
            <CustomListItem
              index={2}
              label="プライバシーポリシー"
              href="https://smarthr.co.jp/privacy/"
            />
          </List>
          <Box
            as="a"
            href="http://smarthr.co.jp/"
            color="#888"
            position="absolute"
            right="7%"
            transition="all .2s ease"
            _hover={{
              color: "#636363",
            }}
          >
            © SmartHR, Inc.
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

interface CustomListItemProps {
  index: number;
  label: string;
  href: string;
}

function CustomListItem({ index, label, href }: CustomListItemProps) {
  return (
    <ListItem
      paddingLeft="0"
      color="#888"
      listStyleType="none"
      padding="0 14px"
      lineHeight="1.8"
      borderLeft={index != 0 ? "1px solid #d8d8d8" : ""}
    >
      <Box
        as="a"
        href={href}
        transition="all .2s ease"
        _hover={{
          color: "#636363",
        }}
      >
        {label}
      </Box>
    </ListItem>
  );
}

function IconFacebook() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 320 512"
    >
      <motion.path
        fill={"#888"}
        initial={{ fill: "#888" }}
        whileHover={{ fill: "#000080" }}
        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
      />
    </motion.svg>
  );
}

function IconTwitter() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 512 512"
    >
      <motion.path
        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
        initial={{ fill: "#888" }}
        whileHover={{ fill: "#1DA1F2" }}
      />
    </motion.svg>
  );
}

function IconArrowUpRight() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 512 512"
    >
      <motion.path
        fill="#888"
        d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
      />
    </motion.svg>
  );
}

export { Footer };
