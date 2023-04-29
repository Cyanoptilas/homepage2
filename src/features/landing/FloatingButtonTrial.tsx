import { Box, Image, Link } from "@chakra-ui/react";

import { useWindowScroll } from "react-use";

function FloatingButtonTrial() {
  const { x, y } = useWindowScroll();

  return (
    <>
      <Link href="/#top">
        <Box
          position="fixed"
          bottom="150px"
          right={y > 80 ? "0px" : "-70px"}
          transition="0.3s"
          zIndex={"overlay"}
        >
          <Image src="image/character/banner-follow-trial.svg" alt="flt" />
        </Box>
      </Link>
    </>
  );
}

export { FloatingButtonTrial };
