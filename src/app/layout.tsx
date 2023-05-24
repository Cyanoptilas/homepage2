"use client";

import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "@/features/configs/CustomTheme";

// This ensures that the icon CSS is loaded immediately before attempting to render icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
      </body>
    </html>
  );
}
