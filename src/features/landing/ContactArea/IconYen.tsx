import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

function IconYen({
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.9204 24.9858C32.5851 23.5336 35.1119 23.7058 36.5641 25.3706L30.5356 30.6296C29.0834 28.9648 29.2556 26.438 30.9204 24.9858ZM47.8913 38.3551L59.4675 25.3415C60.9357 23.6909 63.4641 23.5431 65.1147 25.0114C66.7653 26.4797 66.913 29.008 65.4448 30.6586L50.8507 47.0649C50.0871 47.9232 48.9914 48.4118 47.8426 48.4063C46.6939 48.4007 45.6029 47.9015 44.8477 47.0358L30.5356 30.6296L36.5641 25.3706L47.8913 38.3551Z"
          initial={{ fill: bgColor }}
          animate={{ fill: bgColor }}
          transition={{ duration: 0.3 }}
        ></motion.path>
        <motion.path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.3799 46.3828C32.3799 44.1737 34.1707 42.3828 36.3799 42.3828H59.6228C61.832 42.3828 63.6228 44.1737 63.6228 46.3828C63.6228 48.5919 61.832 50.3828 59.6228 50.3828H36.3799C34.1707 50.3828 32.3799 48.5919 32.3799 46.3828Z"
          initial={{ fill: bgColor }}
          animate={{ fill: bgColor }}
          transition={{ duration: 0.3 }}
        ></motion.path>
        <motion.path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.3799 57.2736C32.3799 55.0645 34.1707 53.2736 36.3799 53.2736H59.6228C61.832 53.2736 63.6228 55.0645 63.6228 57.2736C63.6228 59.4827 61.832 61.2736 59.6228 61.2736H36.3799C34.1707 61.2736 32.3799 59.4827 32.3799 57.2736Z"
          initial={{ fill: bgColor }}
          animate={{ fill: bgColor }}
          transition={{ duration: 0.3 }}
        ></motion.path>
        <motion.path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M47.9999 41.3961C50.209 41.3961 51.9999 43.1869 51.9999 45.3961V70.6465C51.9999 72.8557 50.209 74.6465 47.9999 74.6465C45.7907 74.6465 43.9999 72.8557 43.9999 70.6465V45.3961C43.9999 43.1869 45.7907 41.3961 47.9999 41.3961Z"
          initial={{ fill: bgColor }}
          animate={{ fill: bgColor }}
          transition={{ duration: 0.3 }}
        ></motion.path>
      </motion.svg>
    </Box>
  );
}

export { IconYen };
