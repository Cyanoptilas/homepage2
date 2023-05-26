import { Box, Button, List, ListItem } from "@chakra-ui/react";
import { useHoveredMenuItem } from "../HeaderContainer";

function SubMenuContent6() {
  const [value, setValue] = useHoveredMenuItem();
  const subMenuIndex = "6";

  const divider = {
    content: '""',
    position: "absolute",
    top: "50%",
    right: "-1px",
    transform: "translateY(-50%)",
    width: "2px",
    height: "240px",
    backgroundColor: "#f4f8f9",
  };

  const IconBlank = {
    content: '""',
    position: "absolute",
    width: "12px",
    height: "12px",
    top: "50%",
    right: "18px",
    transform: "translateY(-50%)",
    backgroundImage: "url(/image/picture/icon_blank_gray.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50%",
    backgroundSize: "contain",
  };

  interface IListItemCustom {
    children: React.ReactNode;
  }

  const ListItemCustom = ({ children, ...props }: IListItemCustom) => (
    <ListItem
      display="flex"
      flexDirection="column"
      alignItems="center"
      position="relative"
      _before={divider}
      {...props}
    >
      {children}
    </ListItem>
  );

  const IconBox = ({ imageUrl }: { imageUrl: string }) => (
    <Box
      width="73%"
      marginTop="-10px"
      height="155px"
      backgroundSize="contain"
      backgroundRepeat="no-repeat"
      backgroundPosition="50%"
      marginBottom="16px"
      backgroundImage={imageUrl}
    ></Box>
  );

  const TextBox = ({ text }: { text: string }) => (
    <Box
      fontWeight="700"
      fontSize="20px"
      lineHeight="1"
      color="#4c4c4c"
      marginBottom="28px"
    >
      {text}
    </Box>
  );

  if (value === subMenuIndex) {
    return (
      <Box
        boxSizing="border-box"
        display="flex"
        width="100vw"
        maxWidth="1366px"
      >
        <Box flexGrow="1">
          <List display="grid" gridTemplateColumns="1fr 1fr 1fr" gap="0">
            <ListItemCustom>
              <IconBox imageUrl="url(/image/picture/megaMenu_img_01.svg)" />
              <TextBox text="動画でSmartHRがわかる" />
              <Button
                variant="customOutline"
                as="a"
                href="https://video.smarthr.jp/"
                width="280px"
                height="48px"
                alignItems="center"
                justifyContent="center"
                fontSize="14px"
                target="_blank"
                rel="noopener noreferrer"
                _hover={{
                  boxShadow: "0 5px 8px 2px rgba(0,0,0,.14)",
                  transform: "translateY(-1px)",
                }}
                _before={IconBlank}
              >
                ビデオライブラリ
              </Button>
            </ListItemCustom>
            <ListItemCustom>
              <IconBox imageUrl="url(/image/picture/megaMenu_img_02.svg)" />
              <TextBox text="目的に合わせて選べる" />
              <Button
                variant="customOutline"
                as="a"
                href="https://video.smarthr.jp/"
                width="73%"
                height="48px"
                maxWidth="280px"
                alignItems="center"
                justifyContent="center"
                target="_blank"
                rel="noopener noreferrer"
                _hover={{
                  boxShadow: "0 5px 8px 2px rgba(0,0,0,.14)",
                  transform: "translateY(-1px)",
                }}
              >
                お役立ち資料一覧
              </Button>
            </ListItemCustom>
            <ListItemCustom>
              <IconBox imageUrl="url(/image/picture/megaMenu_img_03.png)" />
              <TextBox text="はじめての方でもすぐわかる" />
              <Button
                as="a"
                href="https://smarthr.jp/resources_service"
                target="_blank"
                rel="noopener noreferrer"
                height="52px"
                width="320px"
                borderRadius="48px"
                border="2px solid transparent"
                backgroundColor="#fd9a00"
                fontSize="16px"
                lineHeight="1.5"
                color="white"
                transition="all .2s ease"
                outline="0"
                _hover={{
                  boxShadow: "0 5px 8px 2px rgba(0,0,0,.14)",
                  transform: "translateY(-1px)",
                  backgroundColor: "#f6b12f",
                }}
              >
                SmartHR資料 3点セットダウンロード
              </Button>
            </ListItemCustom>
          </List>
        </Box>
      </Box>
    );
  } else {
    return <></>;
  }
}
export { SubMenuContent6 };
