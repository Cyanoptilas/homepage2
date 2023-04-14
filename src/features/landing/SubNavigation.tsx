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
  HStack,
} from "@chakra-ui/react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createContext } from "react";

const toggleContext = createContext(false);

function SubNavigation() {
  const { isOpen, onToggle } = useDisclosure();

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
          <MenuItems />
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
          width={"70px"}
          height={"32px"}
          fontSize={"sm"}
          fontWeight={950}
          color={"white"}
          variant={"link"}
          href={"#"}
          transition="0.3s"
          _hover={{
            backgroundColor: "rgba(0,0,0,.1)",
          }}
        >
          ログイン
        </Button>
        <Button
          as={"a"}
          width={"140px"}
          height={"40px"}
          fontSize={"sm"}
          fontWeight={600}
          color={"black"}
          border={"1px"}
          borderColor={"gray.400"} //スクロールした時だけ
          bg={"white"}
          rounded={100}
          href={""}
          _hover={{
            boxShadow: "0 6px 9px 3px rgba(0,0,0,.14)",
          }}
        >
          お問い合わせ
        </Button>

        <Button
          as={"a"}
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          bg={"orange"}
          rounded={100}
          href={"#"}
          _hover={{
            boxShadow: "0 4px 8px 2px rgba(0,0,0,.14)",
          }}
        >
          お役立ち資料
          <Box paddingLeft={2}>
            <FontAwesomeIcon icon={faAngleDown} size={"xs"} />
          </Box>
        </Button>
      </Stack>
    </Flex>
  );
}

const MenuItems = () => {
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
                {navItem.label}{" "}
                <FontAwesomeIcon icon={faAngleDown} size={"xs"} />
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                width={"1100px"}
                height="400px"
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                position="absolute"
                left="-150px"
                transitionDuration="0.1s"
                zIndex={"overlay"}
              >
                <Box>
                  <Container bg="blue.600" color="white">
                    Todo SubMenu実装
                  </Container>
                </Box>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
      <Button
        as={"a"}
        width={"70px"}
        height={"38px"}
        fontSize={"sm"}
        fontWeight={950}
        color={"white"}
        variant={"link"}
        href={"#"}
        transition="0.3s"
        _hover={{
          backgroundColor: "rgba(0,0,0,.1)",
        }}
      >
        イベント
      </Button>
    </Stack>
  );
};

interface NavItem {
  label: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "SmartHRとは",
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
