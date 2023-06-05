import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

function IconMail({
  iconColor,
  bgColor,
}: {
  iconColor: string;
  bgColor: string;
}) {
  return (
    <Box position="absolute" top="32px" left="50%" transform="translateX(-50%)">
      <motion.svg
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.rect
          width="96"
          height="96"
          rx="48"
          initial={{ fill: iconColor }}
          animate={{ fill: iconColor }}
          transition={{ duration: 0.3 }}
        ></motion.rect>
        <motion.path
          d="M73 42.2528C72.1629 43.1435 71.2143 43.9261 70.2098 44.6009C65.5502 47.6506 60.8627 50.7273 56.3147 53.9119C53.971 55.5852 51.0692 57.6364 48.0279 57.6364H48H47.9721C44.9308 57.6364 42.029 55.5852 39.6853 53.9119C35.1373 50.7003 30.4498 47.6506 25.8181 44.6009C24.7857 43.9261 23.8371 43.1435 23 42.2528V63.6818C23 66.0568 25.0089 68 27.4643 68H68.5357C70.9911 68 73 66.0568 73 63.6818V42.2528ZM73 32.3182C73 29.9432 70.9632 28 68.5357 28H27.4643C24.4788 28 23 30.267 23 32.9119C23 35.3679 25.8181 38.4176 27.7991 39.7131C32.1239 42.6278 36.5045 45.5426 40.8292 48.4844C42.6429 49.6989 45.7121 52.1818 47.9721 52.1818L48 54.1818L48.0279 52.1818C50.2879 52.1818 53.3571 49.6989 55.1708 48.4844C59.4955 45.5426 63.8761 42.6278 68.2288 39.7131C70.6842 38.0668 73 35.3409 73 32.3182Z"
          initial={{ fill: bgColor }}
          animate={{ fill: bgColor }}
          transition={{ duration: 0.3 }}
        ></motion.path>
      </motion.svg>
    </Box>
  );
}

export { IconMail };
