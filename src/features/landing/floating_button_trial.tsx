import {
  Box,
  Image,
  keyframes,
  Link,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

function FloatingButtonTrial() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const preferMotion = usePrefersReducedMotion();

  return (
    <>
      <Link href="/#top">
        <Box
          position="fixed"
          bottom="150px"
          right={scrollPosition > 400 ? "0px" : "-70px"}
          transition="0.3s"
        >
          <Image src="image/character/banner-follow-trial.svg" alt="flt" />
        </Box>
      </Link>
    </>
  );
}

export { FloatingButtonTrial };
