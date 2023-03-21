import {
    Box,
    Flex,
    HStack,
    Image,
    position,
    Text,
    VStack,
    keyframes,
    usePrefersReducedMotion,
  } from "@chakra-ui/react";
  
  const ScrollAnimation = keyframes`
    from {
      transform: translateX(0%);
    }
    to {
      transform:translateX(-100%);
    }
  `;
  export default function BarLogoScroll() {
    const preferMotion = usePrefersReducedMotion();
  
    const myScrollAnimation = preferMotion
      ? undefined
      : `${ScrollAnimation} 22s linear infinite`;
    return (
      <>
        <Box
          width={4200}
          height={100}
          animation={myScrollAnimation}
          background="white"
        >
          <HStack>
            <Image
              src="/image/logo/logo-slide.png"
              alt="ロゴスライド"
              fit={"cover"}
              align="left"
            />
            <Image
              src="/image/logo/logo-slide.png"
              alt="ロゴスライド"
              fit={"cover"}
              align="left"
            />
          </HStack>
        </Box>
      </>
    );
  }
  