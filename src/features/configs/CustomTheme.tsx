// theme.js
import { extendTheme } from "@chakra-ui/react";
const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily:
          // "'游ゴシック体', YuGothic, '游ゴシック', 'Yu Gothic', 'メイリオ', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', sans-serif",
          "'Meiryo', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', sans-serif",
        lineHeight: "1",
        fontWeight: "300",
      },
    },
  },
});
export default customTheme;
