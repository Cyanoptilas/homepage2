import {
  Box,
  Flex,
  HStack,
  Image,
  position,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

export default function BarLogoScroll() {
  return (
    <>
      <Box width={"100%"} height={100}>
        <Image
          src="/image/logo/logo-slide.png"
          alt="ロゴスライド"
          fit={"cover"}
          align="left"
          width={"100%"}
          height={100}
        />
      </Box>
    </>
  );
}
