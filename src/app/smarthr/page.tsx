"use client";

import Aco from "@/components/lv2/Acordion";
import {
  Button,
  ChakraProvider,
  HStack,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

export default function smarthr() {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  //   const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <h3>smarthrの特徴</h3>
      <h3></h3>
      <HStack spacing="0" padding={"0"} align={"top"}>
        <Aco question={"質問１"}>答え1</Aco>
        <Aco question={"質問２"}>答え2</Aco>
        <Aco question={"質問３"}>答え3</Aco>
      </HStack>
      {/* <Button onMouseOver={onOpen}>モーダルを開く</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          モーダルの中身
          <Button onClick={onClose}>モーダルを閉じる</Button>
        </ModalContent>
      </Modal> */}
    </ChakraProvider>
  );
}
