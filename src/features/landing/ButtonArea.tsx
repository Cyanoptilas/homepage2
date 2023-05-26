import { Box, Button, List, ListItem } from "@chakra-ui/react";

function ButtonArea() {
  return (
    <Box boxSizing="border-box" background="#f4f8f9" paddingBottom="60px">
      <List
        gap="20px 32px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <ListItem>
          <Button
            as="a"
            href="https://smarthr.jp/pricing/"
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
            料金・プランの詳細を見る
          </Button>
        </ListItem>
        <ListItem>
          <Button
            variant="customOutline"
            as="a"
            href="https://soroban.smarthr.jp/"
            width="320px"
            height="52px"
            alignItems="center"
            justifyContent="center"
            fontSize="16px"
            _hover={{
              boxShadow: "0 5px 8px 2px rgba(0,0,0,.14)",
              transform: "translateY(-1px)",
            }}
          >
            導入効果をシミュレーションする
          </Button>
        </ListItem>
      </List>
    </Box>
  );
}

export { ButtonArea };
