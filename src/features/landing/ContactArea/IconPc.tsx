import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

function IconPc({
  iconColor,
  bgColor,
}: {
  iconColor: string;
  bgColor: string;
}) {
  return (
    <Box position="absolute" top="32px" left="50%" transform="translateX(-50%)">
      <motion.svg
        fill="none"
        height="96"
        viewBox="0 0 96 96"
        width="96"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.rect
          fill="#f4f8f9"
          height="96"
          rx="48"
          width="96"
          initial={{ fill: iconColor }}
          animate={{ fill: iconColor }}
          transition={{ duration: 0.3 }}
        />
        <motion.g fill="#00c4cc">
          <motion.path
            initial={{ fill: bgColor }}
            animate={{ fill: bgColor }}
            transition={{ duration: 0.3 }}
            d="m69.2727 26.4727h-42.5454c-2.3489 0-4.2546 1.9057-4.2546 4.2546v28.0363c0 2.3489 1.9057 4.2546 4.2546 4.2546h17.0182l-1.4182 4.2545h-6.3818c-1.1789 0-2.1273.9484-2.1273 2.1273s.9484 2.1273 2.1273 2.1273h24.109c1.1789 0 2.1273-.9484 2.1273-2.1273s-.9484-2.1273-2.1273-2.1273h-6.3818l-1.4182-4.2545h17.0182c2.3489 0 4.2546-1.9057 4.2546-4.2546v-28.0363c0-2.3489-1.9057-4.2546-4.2546-4.2546zm-1.4182 30.8728h-39.709v-25.2h39.709z"
          ></motion.path>
          <motion.path
            clipRule="evenodd"
            d="m22 30.7273c0-2.61 2.1173-4.7273 4.7273-4.7273h42.5454c2.61 0 4.7273 2.1173 4.7273 4.7273v28.0363c0 2.61-2.1173 4.7273-4.7273 4.7273h-16.3623l1.1031 3.3091h6.041c1.44 0 2.6 1.1601 2.6 2.6s-1.16 2.6-2.6 2.6h-24.109c-1.44 0-2.6-1.1601-2.6-2.6s1.16-2.6 2.6-2.6h6.041l1.1031-3.3091h-16.3623c-2.61 0-4.7273-2.1173-4.7273-4.7273zm4.7273-3.7818c-2.0878 0-3.7818 1.694-3.7818 3.7818v28.0363c0 2.0878 1.694 3.7819 3.7818 3.7819h17.674l-1.7333 5.2h-6.7225c-.9178 0-1.6546.7367-1.6546 1.6545s.7368 1.6545 1.6546 1.6545h24.109c.9178 0 1.6546-.7367 1.6546-1.6545s-.7368-1.6545-1.6546-1.6545h-6.7225l-1.7333-5.2h17.674c2.0878 0 3.7818-1.6941 3.7818-3.7819v-28.0363c0-2.0878-1.694-3.7818-3.7818-3.7818zm.9454 4.7272h40.6546v26.1455h-40.6546zm.9455.9455v24.2545h38.7636v-24.2545z"
            fillRule="evenodd"
            initial={{ fill: bgColor }}
            animate={{ fill: bgColor }}
            transition={{ duration: 0.3 }}
          ></motion.path>
        </motion.g>
      </motion.svg>
    </Box>
  );
}

export { IconPc };
