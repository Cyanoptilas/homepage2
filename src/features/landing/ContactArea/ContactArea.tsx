import { Box, List, ListItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IconMail } from "./IconMail";
import { IconPc } from "./IconPc";
import { IconYen } from "./IconYen";

function ContactArea() {
  return (
    <Box backgroundColor="#00c4cc">
      <Box maxWidth="1336px" margin="auto" padding="72px 0 80px">
        <Box
          fontWeight="700"
          fontSize="28px"
          lineHeight="1.5"
          color="#fff"
          textAlign="center"
          marginBottom="32px"
        >
          SmartHRの導入に関してご不明な点がございましたら
          <br />
          お気軽にお問い合わせください
        </Box>
        <List
          display="grid"
          maxWidth="1212px"
          padding="0 16px"
          margin="auto"
          gridTemplateColumns="1fr 1fr 1fr"
          gap="32px"
          justifyContent="center"
          transition="all .2s ease"
        >
          <CustomListItem
            title="お問い合わせ"
            description={
              "高度なスキルを持つ専門スタッフが、\nあなたのお悩みや不明点にお答えします"
            }
            imageType="mail"
            buttonLabel="相談する"
            href="https://smarthr.jp/contact"
          />
          <CustomListItem
            title="お見積り"
            description={"お客さまの状況に合わせ、\n最適なプランをご案内します"}
            imageType="yen"
            buttonLabel="プランを見る"
            href="https://smarthr.jp/pricing/"
          />
          <CustomListItem
            title="無料トライアル"
            description={
              "15日間の無料トライアルで\n実際の機能をお試しいただけます"
            }
            imageType="pc"
            buttonLabel="試してみる"
            href="https://smarthr.jp/signup/"
          />
        </List>
      </Box>
    </Box>
  );
}

interface CustomListItemProps {
  title: string;
  description: string;
  imageType: string;
  buttonLabel: string;
  href: string;
}

function CustomListItem({
  title,
  description,
  imageType,
  buttonLabel,
  href,
}: CustomListItemProps) {
  const [isHovered, setHovered] = useState(false);
  const [iconColor, setIconColor] = useState("#fff");
  const [bgColor, setBgColor] = useState("#00C4CC");

  useEffect(() => {
    let intervalId: any;

    if (isHovered) {
      intervalId = setInterval(() => {
        setIconColor("#00C4CC");
        setBgColor("#fff");
      }, 0);
    } else {
      clearInterval(intervalId);
      setIconColor("#fff");
      setBgColor("#00C4CC");
    }

    return () => clearInterval(intervalId);
  }, [isHovered]);

  return (
    <ListItem listStyleType="none">
      <Box
        as="a"
        href={href}
        boxSizing="border-box"
        height="100%"
        position="relative"
        borderRadius="8px"
        backgroundColor="#fff"
        display="flex"
        flexDirection="column"
        alignItems="center"
        color="#4c4c4c"
        padding="152px 10px 112px"
        transition="all .3s ease"
        boxShadow={isHovered ? "0 12px 32px rgba(0,0,0,.32)" : ""}
        onMouseOver={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
      >
        {imageType === "mail" ? (
          <IconMail iconColor={iconColor} bgColor={bgColor} />
        ) : imageType === "yen" ? (
          <IconYen iconColor={iconColor} bgColor={bgColor} />
        ) : imageType === "pc" ? (
          <IconPc iconColor={iconColor} bgColor={bgColor} />
        ) : (
          ""
        )}

        <Box
          fontWeight="700"
          fontSize="28px"
          lineHeight="1"
          marginBottom="16px"
        >
          {title}
        </Box>
        <Box
          textAlign="center"
          fontWeight="700"
          fontSize="16px"
          lineHeight="1.5"
        >
          {description.split(/(\n)/).map((item) => {
            return (
              <React.Fragment key={item}>
                {item.match(/\n/) ? <br /> : item}
              </React.Fragment>
            );
          })}
        </Box>
        <Box
          backgroundColor={isHovered ? "#f6b12f" : "#fd9a00"}
          position="absolute"
          bottom="40px"
          left="50%"
          transform="translateX(-50%)"
          width="80%"
          maxWidth="280px"
          height="52px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="52px"
          color="#fff"
          fontWeight="700"
          fontSize="16px"
          lineHeight="1.5"
          transition="background-color .3s ease"
        >
          {buttonLabel}
        </Box>
      </Box>
    </ListItem>
  );
}

export { ContactArea };
