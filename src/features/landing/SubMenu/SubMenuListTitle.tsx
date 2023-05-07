import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import NextLink from "next/link";

type Props = {
  item: any;
  index: number;
  hoveredNo: number;
  setHoveredNo: React.Dispatch<React.SetStateAction<number>>;
};

function SubMenuListTitle({ item, index, hoveredNo, setHoveredNo }: Props) {
  return (
    <Flex // List Title
      margin="0 0 20px"
      fontSize="14px"
      fontWeight="700"
      lineHeight="1"
      marginTop={index === 1 ? "40px" : "0"}
    >
      <NextLink href={item.href}>
        <Text
          as="a"
          position="relative"
          fontWeight="700"
          lineHeight="1"
          paddingRight="28px"
          textDecoration="none"
          color={hoveredNo === index ? "#00c4cc" : "#4c4c4c"}
          transition="color .2s"
          onMouseEnter={() => setHoveredNo(index)}
          onMouseLeave={() => setHoveredNo(-1)}
          _before={{
            content: "''",
            position: "absolute",
            width: "20px",
            height: "20px",
            top: "45%",
            right: hoveredNo === index ? "-12px" : "0px",
            transform: "translateY(-50%)",
            margin: "1px 0 0",
            backgroundImage: "url(/image/picture/icon_arrowRight_blue.svg)",
            backgroundPosition: "50%",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            transition: "right .2s",
          }}
        >
          {item.title}
        </Text>
      </NextLink>
    </Flex>
  );
}

export { SubMenuListTitle };
