// theme.js
import { extendTheme, theme } from "@chakra-ui/react";
const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily:
          // "'游ゴシック体', YuGothic, '游ゴシック', 'Yu Gothic', 'メイリオ', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', sans-serif",
          "'YakuHanJP', 'Meiryo', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', sans-serif",
        lineHeight: "1",
        fontWeight: "300",
      },
    },
  },
  components: {
    Button: {
      variants: {
        customOutline: () => {
          return {
            borderRadius: "48px",
            border: "2px solid #e5e5e5",
            background: "white",
            lineHeight: "1.5",
            color: "#444",
            fontSize: "14px",
            fontWeight: "700",
            transition: "all .2s ease",
          };
        },
      },
    },
  },
});
export default customTheme;
