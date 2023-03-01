"use client";

import { Button, ChakraProvider, useDisclosure } from "@chakra-ui/react";
// import { Top, Navbar2 } from "@/components/export";
import { Top, WithSubnavigation, Navbar2 } from "@/components/lv3/export";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ChakraProvider>
      <WithSubnavigation />
      <Top></Top>
      <Navbar2></Navbar2>

      <Link href="/smarthr">
        <Button>SmartHRの特徴</Button>
      </Link>
    </ChakraProvider>
  );
}
