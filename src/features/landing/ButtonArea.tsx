import { Box, List, ListItem } from "@chakra-ui/react";
import { ButtonWhiteBordered } from "../ui";
import { ButtonOrange } from "../ui/ButtonOrange";

function ButtonArea() {
  return (
    <Box boxSizing="border-box" background="#f4f8f9">
      <List
        gap="20px 32px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <ListItem>
          <ButtonOrange
            label="料金・プランの詳細を見る"
            width="320px"
            height="52px"
            fontSize="16px"
            href="https://smarthr.jp/pricing/"
          />
        </ListItem>
        <ListItem>
          <ButtonWhiteBordered
            label="導入効果をシミュレーションする"
            width="320px"
            height="52px"
            fontSize="16px"
            href="https://soroban.smarthr.jp/"
          />
        </ListItem>
      </List>
    </Box>
  );
}

export { ButtonArea };
