import { ButtonWhiteBordered } from "@/features/ui";
import { ButtonOrange } from "@/features/ui/ButtonOrange";
import { Box, List, ListItem } from "@chakra-ui/react";
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
              <ButtonWhiteBordered
                label="ビデオライブラリ"
                href="https://video.smarthr.jp/"
                isBlank
              />
            </ListItemCustom>
            <ListItemCustom>
              <IconBox imageUrl="url(/image/picture/megaMenu_img_02.svg)" />
              <TextBox text="目的に合わせて選べる" />
              <ButtonWhiteBordered
                label="お役立ち資料一覧"
                href="https://smarthr.jp/resources_service"
              />
            </ListItemCustom>
            <ListItemCustom>
              <IconBox imageUrl="url(/image/picture/megaMenu_img_03.png)" />
              <TextBox text="はじめての方でもすぐわかる" />
              <ButtonOrange
                label="SmartHR資料 3点セットダウンロード"
                href="https://smarthr.jp/resources_service"
              />
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
