"use client";

import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "@/features/configs/CustomTheme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ChakraProvider theme={customTheme}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ChakraProvider>
  );
}
