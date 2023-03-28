import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
  Container,
} from "@chakra-ui/react";
import { createContext } from "react";

const toggleContext = createContext(false);

function SubNavigation() {
  const { isOpen, onToggle } = useDisclosure();
  // const {
  //   isOpen: isMenuOpen,
  //   onOpen: onMenuOpen,
  //   onClose: onMenuClose,
  // } = useDisclosure();

  return (
    <Flex
      bg={useColorModeValue("#00c4cc", "gray.800")}
      color={useColorModeValue("gray.600", "white")}
      minH={"60px"}
      py={{ base: 2 }}
      px={{ base: 4 }}
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("#00c4cc", "gray.900")}
      align={"center"}
    >
      <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
        {isOpen ? (
          <Image
            src="/image/logo/logo.svg"
            alt="SmartHR Logo"
            style={{ marginLeft: 15 }}
          />
        ) : (
          <Image
            src="/image/logo/logo_white.svg"
            alt="SmartHR Logo"
            style={{ marginLeft: 15 }}
          />
        )}
        <Flex display={{ base: "none", md: "flex" }} ml={10}>
          <DesktopNav />
        </Flex>
      </Flex>

      <Stack
        flex={{ base: 1, md: 0 }}
        justify={"flex-end"}
        direction={"row"}
        spacing={6}
      >
        <Button
          as={"a"}
          fontSize={"sm"}
          fontWeight={950}
          color={"white"}
          variant={"link"}
          href={"#"}
        >
          ログイン
        </Button>
        <Button
          as={"a"}
          display={{ base: "none", md: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          color={"black"}
          bg={"white"}
          rounded={100}
          href={"#"}
          _hover={{
            shadow: 10000,
          }}
        >
          お問い合わせ
        </Button>

        <Button
          as={"a"}
          display={{ base: "none", md: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          bg={"orange"}
          rounded={100}
          href={"#"}
          _hover={{
            bg: "pink.300",
          }}
          _after={{
            class: "fas fa-angle-up",
          }}
        >
          お役立ち資料
        </Button>
      </Stack>
    </Flex>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("white", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={1}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
              >
                {/* <Stack>
                      {navItem.children.map((child) => (
                        <DesktopSubNav key={child.label} {...child} />
                      ))}
                    </Stack> */}
                <Container bg="blue.600" color="white">
                  Todo SubMenu実装
                </Container>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            color={"white"}
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
        </Box>
      </Stack>
    </Link>
  );
};

interface NavItem {
  label: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "smartHRとは",
    children: [
      {
        label: "smartHRの特徴",
        href: "#",
      },
      {
        label: "導入効果",
        href: "#",
      },
      {
        label: "充実のサポート",
        href: "#",
      },
    ],
  },
  {
    label: "機能",
    children: [
      {
        label: "入社手続き・雇用契約",
        href: "#",
      },
      {
        label: "文書配布",
        href: "#",
      },
    ],
  },
  {
    label: "料金",
    children: [
      {
        label: "料金プラン",
        href: "#",
      },
      {
        label: "コスト削減シミュレーター",
        href: "#",
      },
    ],
    href: "#",
  },
  {
    label: "導入事例",
    children: [
      {
        label: "導入事例",
        href: "#",
      },
      {
        label: "導入企業一覧",
        href: "#",
      },
    ],
  },
  {
    label: "お知らせ",
    children: [
      {
        label: "ニュース",
        href: "#",
      },
      {
        label: "プレスリリース",
        href: "#",
      },
    ],
  },
];

export { SubNavigation };
