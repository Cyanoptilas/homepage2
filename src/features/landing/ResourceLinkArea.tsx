import { Box, Button, Image, List, ListItem } from "@chakra-ui/react";
import { useState } from "react";

function ResourceLinkArea() {
  return (
    <Box display="block" margin="90px auto 50px">
      <Box
        maxWidth="1200px"
        padding="0 10px"
        margin="0 auto"
        boxSizing="border-box"
        paddingBottom="45px"
      >
        <Box
          as="h2"
          fontSize="36px"
          fontWeight="700"
          textAlign="center"
          position="relative"
          padding="0 0 25px"
          margin="0 auto 45px"
          color="#444"
          _before={{
            content: "''",
            display: "block",
            width: "80px",
            height: "5px",
            backgroundColor: "#00c4cc",
            position: "absolute",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          お役立ち資料
        </Box>
        <List
          margin="0 -16px 4px"
          display="flex"
          flexWrap="nowrap"
          justifyContent="space-between"
        >
          <CustomListItem
            imageHref="./image/picture/megaMenu_img_03.png"
            title="すぐにわかる SmartHR資料 3点セット"
            buttonHref="https://smarthr.jp/resources/tv-campaign"
          />
          <CustomListItem
            imageHref="./image/picture/img_1_minutes_smarthr.png"
            title="1分でわかる！SmartHR"
            buttonHref="https://smarthr.jp/resources/1minute_smarthr"
          />
          <CustomListItem
            imageHref="./image/picture/img_ebook_31.png"
            title="SmartHR導入事例集"
            buttonHref="https://smarthr.jp/resources/ebook_31"
          />
        </List>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Button
          as="a"
          href="https://smarthr.jp/resources"
          background="#f69c2f"
          color="#fff!important"
          fontWeight="700"
          borderRadius="100px"
          fontSize="14px"
          marginBottom="20px"
          maxWidth="240px"
          padding="12px"
          width="240px"
          height="50px"
          lineHeight="1.8"
          transition="all .2s ease"
          _hover={{
            background: "#f6b12f",
            boxShadow: "0 5px 8px 2px rgba(0,0,0,.14)",
            transform: "translateY(-1px)",
          }}
        >
          お役立ち資料一覧を見る
        </Button>
      </Box>
    </Box>
  );
}

interface CustomListItemProps {
  imageHref: string;
  title: string;
  buttonHref: string;
}

function CustomListItem({ imageHref, title, buttonHref }: CustomListItemProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <ListItem
      boxSizing="border-box"
      float="left"
      fontWeight="700"
      marginBottom="30px"
      padding="0 16px"
      position="relative"
      textAlign="center"
      width="33.33%"
    >
      <Box
        as="a"
        href={buttonHref}
        borderRadius="8px"
        background="#f8f7f6"
        height="309px"
        overflow="hidden"
        padding="10px"
        position="relative"
        zIndex="1"
        transition="all .2s ease"
        display="flex"
        alignItems="center"
        justifyContent="center"
        onMouseOver={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
      >
        <Image
          src={imageHref}
          alt={title}
          height="auto"
          maxHeight="93%"
          maxWidth="93%"
          transform={hovered ? "scale(1.05)" : "scale(1.0)"}
          transformOrigin="center"
          transitionDuration=".3s"
          width="auto"
          marginBottom="8px"
        />
      </Box>
      <Box
        color="#2b2b2b"
        fontSize="18px"
        lineHeight="1.5"
        margin="20px 0"
        textAlign="center"
      >
        {title}
      </Box>
      <Button
        as="a"
        href={buttonHref}
        variant="customOutline"
        height="49px"
        color="#444"
        fontSize="14px"
        maxWidth="196px"
        _hover={{
          color: "#333",
          boxShadow: "0 5px 8px 2px rgba(0,0,0,.14)",
          filter: "brightness(110%)",
          transform: "translateY(-1px)",
        }}
      >
        資料ダウンロード
        <Image
          src="/image/icon/icon_download_black.svg"
          alt="img_top"
          height="22px"
          width="22px"
          transform="scale(0.7)"
          color="#4e4c49"
          fill="currentColor"
          margin="0px 0 0 15px"
          verticalAlign="middle"
        />
      </Button>
    </ListItem>
  );
}

export { ResourceLinkArea };
