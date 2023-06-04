import {
  Box,
  Button,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

function ClientsArea() {
  return (
    <Box as="section">
      <Box
        padding="70px 0"
        backgroundColor="#ecf2f3"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          padding="0 10px"
          boxSizing="border-box"
          maxWidth="1200px"
          width="100%"
          textAlign="center"
        >
          <Heading
            as="span"
            fontSize="26px"
            color="#4c4c4c"
            fontWeight="700"
            lineHeight="1.4"
          >
            様々な業界の企業に
          </Heading>
          <Heading
            as="h2"
            fontSize="34px"
            color="#4c4c4c"
            fontWeight="700"
            lineHeight="1.4"
            paddingBottom="20px"
          >
            SmartHRをご利用いただいています。
          </Heading>
          <Box padding="7px 0" maxWidth="1050px" margin="0 auto 30px">
            <List
              margin="0 -15px"
              display="flex"
              justifyContent="space-between"
              textAlign="center"
            >
              <ListItem
                float="left"
                width="50%"
                maxWidth="332px"
                boxSizing="border-box"
                padding="0"
                listStyleType="none"
              >
                <Image
                  src="./image/character/banner-share-no1.png"
                  alt="労務管理"
                  height="auto"
                  max-width="100%"
                />
              </ListItem>
              <ListItem
                float="left"
                width="50%"
                maxWidth="332px"
                boxSizing="border-box"
                padding="0"
                listStyleType="none"
              >
                <Image
                  src="./image/character/banner-satisfaction-no1.png"
                  alt="満足度"
                  height="auto"
                  max-width="100%"
                />
              </ListItem>
              <ListItem
                float="left"
                width="50%"
                maxWidth="332px"
                boxSizing="border-box"
                padding="0"
                listStyleType="none"
              >
                <Image
                  src="./image/character/banner-talent-no1.png"
                  alt="タレント"
                  height="auto"
                  max-width="100%"
                />
              </ListItem>
            </List>
          </Box>
          <List
            margin="0"
            width="1180px"
            display="flex"
            justifyContent="space-between"
          >
            <ListItem width="calc((100% - 50px) / 3)">
              <Box
                boxSizing="border-box"
                padding="15px"
                color="#858585"
                fontSize="16px"
                width="100%"
                backgroundColor="#fff"
                border="1px solid #dee2e9"
                borderRadius="6px"
              >
                登録者数
                <br />
                <Heading
                  as="span"
                  fontSize="40px"
                  marginRight="5px"
                  color="#00c4cc"
                  // color= "#555"
                  //   fontSize="26px"
                  fontWeight="700"
                >
                  50,000社
                </Heading>
                <Heading
                  as="span"
                  color="#555"
                  fontSize="26px"
                  fontWeight="700"
                >
                  以上
                </Heading>
                <Heading
                  as="span"
                  bottom="12px"
                  fontSize="10px"
                  position="relative"
                  verticalAlign="baseline"
                >
                  ※4
                </Heading>
              </Box>
            </ListItem>
            <ListItem width="calc((100% - 50px) / 3)">
              <Box
                boxSizing="border-box"
                padding="15px"
                color="#858585"
                fontSize="16px"
                width="100%"
                backgroundColor="#fff"
                border="1px solid #dee2e9"
                borderRadius="6px"
              >
                サービス利用継続率
                <br />
                <Heading
                  as="span"
                  fontSize="40px"
                  marginRight="5px"
                  color="#00c4cc"
                  fontWeight="700"
                >
                  99%
                </Heading>
              </Box>
            </ListItem>
            <ListItem width="calc((100% - 50px) / 3)">
              <Box
                boxSizing="border-box"
                padding="15px"
                color="#858585"
                fontSize="16px"
                width="100%"
                backgroundColor="#fff"
                border="1px solid #dee2e9"
                borderRadius="6px"
              >
                利用企業の従業員数
                <br />
                <Heading
                  as="span"
                  fontSize="40px"
                  marginRight="5px"
                  color="#00c4cc"
                  fontWeight="700"
                >
                  2名〜数万名
                </Heading>
                <Heading
                  as="span"
                  color="#555"
                  fontSize="26px"
                  fontWeight="700"
                >
                  規模
                </Heading>
              </Box>
            </ListItem>
          </List>
          <Heading as="a" color="#545454" lineHeight="inherit"></Heading>
          <Text
            margin="0"
            opacity=".75"
            fontFamily="YuGo-Medium,sans-serif"
            fontSize="12px"
            color="#545454"
            letterSpacing="0"
            lineHeight="18px"
            textAlign="left"
            marginTop="16px!important"
          >
            <Link
              href="https=//mic-r.co.jp/mr/02640/"
              target="_blank"
              _hover={{ color: "#333", textDecoration: "underline" }}
            >
              ※1 デロイト トーマツ
              ミック経済研究所「HRTechクラウド市場の実態と展望
              2022年度版」労務管理クラウド市場・出荷金額（2022年度見込）
            </Link>
            ※2 株式会社マクロミル（委託調査）2020年12月
            クラウド型人事労務システムを運用・管理中の1,800名を対象に調査 ※3
            ITreviewカテゴリーレポート「タレントマネジメント」（2022 Summer）※4
            SmartHR上で事業所登録を完了しているテナント数（但し、退会処理を行ったテナント数を除く）
          </Text>
          <Box margin="15px auto 0">
            <Box
              padding="40px 0 25px"
              width="100%"
              backgroundColor="#fff"
              border="1px solid #dee2e9"
              borderRadius="6px"
            >
              <Heading
                as="h3"
                fontSize="25px"
                fontWeight="700"
                marginBottom="30px"
                color="#444"
                lineHeight="1.4"
                margin="0 0 20px"
                padding="0"
              >
                導入企業
              </Heading>
              <List
                marginLeft="-10px"
                textAlign="center"
                boxSizing="border-box"
              >
                <CustomListItem
                  src="mitsubishijuko.png"
                  alt="三菱重工業株式会社"
                  height="25"
                />
                <CustomListItem
                  src="jfe.png"
                  alt="JFEホールディングス株式会社"
                  height="72"
                />
                <CustomListItem
                  src="denso.png"
                  alt="株式会社デンソー"
                  height="42"
                />
                <CustomListItem
                  src="nissinholdings.png"
                  alt="日清食品株式会社"
                  height="50"
                />
                <CustomListItem
                  src="dydo.png"
                  alt="ダイドードリンコ株式会社"
                  height="35"
                />
                <CustomListItem
                  src="lion.png"
                  alt="ライオン株式会社"
                  height="44"
                />
                <CustomListItem
                  src="aeon.png"
                  alt="イオン株式会社"
                  height="36"
                />
                <CustomListItem
                  src="familymart.png"
                  alt="株式会社ファミリーマート"
                  height="72"
                />
                <CustomListItem
                  src="matsumotokiyoshi.png"
                  alt="株式会社マツモトキヨシ"
                  height="72"
                />
                <CustomListItem
                  src="bookoff.png"
                  alt="ブックオフグループホールディングス株式会社"
                  height="72"
                />
                <CustomListItem
                  src="satudoraholdings.png"
                  alt="株式会社サッポロドラッグストアー"
                  height="55"
                />
                <CustomListItem
                  src="coopsapporo.png"
                  alt="生活協同組合コープさっぽろ"
                  height="54"
                />
                <CustomListItem
                  src="marukameseimen.png"
                  alt="株式会社丸亀製麺"
                  height="72"
                />
                <CustomListItem
                  src="odakyu.png"
                  alt="小田急電鉄株式会社"
                  height="72"
                />
                <CustomListItem src="tokyu.png" alt="東急" height="33" />
                <CustomListItem
                  src="jrkyusyu.png"
                  alt="JR九州 グループ会社"
                  height="45"
                />
                <CustomListItem
                  src="kyusyu_denryoku.png"
                  alt="九州電力株式会社"
                  height="72"
                />
                <CustomListItem
                  src="sagawa-logi.png"
                  alt="佐川グローバルロジスティクス株式会社"
                  height="72"
                />
                <CustomListItem
                  src="yamato.png"
                  alt="ヤマトホームコンビニエンス"
                  height="72"
                />
                <CustomListItem
                  src="tokiomarine.png"
                  alt="東京海上ホールディングス"
                  height="72"
                />
                <CustomListItem
                  src="daiwa-securities.png"
                  alt="大和証券株式会社"
                  height="72"
                />
                <CustomListItem
                  src="jibunbank.png"
                  alt="auじぶん銀行株式会社"
                  height="72"
                />
                <CustomListItem
                  src="mercari.png"
                  alt="株式会社メルカリ"
                  height="72"
                />
                <CustomListItem src="line.png" alt="LINE株式会社" height="30" />
                <CustomListItem src="zozo.png" alt="株式会社ZOZO" height="65" />
                <CustomListItem src="hatioji.png" alt="八王子市" height="72" />
                <CustomListItem
                  src="komazawauniv.png"
                  alt="駒澤大学"
                  height="72"
                />
                <CustomListItem
                  src="kwansei.png"
                  alt="関西学院大学"
                  height="72"
                />
                <CustomListItem
                  src="yaruki.png"
                  alt="株式会社 やる気スイッチグループホールディングス"
                  height="72"
                />
                <CustomListItem
                  src="TV-asahi-RGB.png"
                  alt="株式会社テレビ朝日"
                  height="38"
                />
                <CustomListItem
                  src="sankeidigital.png"
                  alt="株式会社産経デジタル"
                  height="72"
                />
                <CustomListItem
                  src="tohocinemas.png"
                  alt="TOHOシネマズ株式会社"
                  height="72"
                />
                <CustomListItem
                  src="gokuraku.png"
                  alt="株式会社 極楽湯"
                  height="42"
                />
                <CustomListItem
                  src="hoshino.png"
                  alt="株式会社星野リゾート"
                  height="72"
                />
                <CustomListItem
                  src="thenewotani.png"
                  alt="株式会社ニュー・オータニ"
                  height="72"
                />
                <CustomListItem
                  src="pasona.png"
                  alt="株式会社パソナ"
                  height="72"
                />
                <CustomListItem
                  src="RECRUIT_rd.png"
                  alt="株式会社リクルートR&amp;Dスタッフィング"
                  height="72"
                />
                <CustomListItem
                  src="mm.png"
                  alt="株式会社MMコーポレーション"
                  height="72"
                />
                <CustomListItem
                  src="mediclude.png"
                  alt="株式会社メディクルード"
                  height="72"
                />
                <CustomListItem
                  src="keiai.png"
                  alt="ケイアイスター不動産株式会社"
                  height="50"
                />
                <CustomListItem
                  src="config_cTL.png"
                  alt="株式会社NIPPO"
                  height="72"
                />
                <CustomListItem
                  src="kinto.png"
                  alt="株式会社KINTO"
                  height="72"
                />
              </List>
              <Button
                variant="customOutline"
                width="168px"
                height="46px"
                margin="20px auto"
                color="#444"
                fontSize="16px"
                fontWeight="700"
              >
                導入企業一覧
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

interface CustomListItemProps {
  src: string;
  alt: string;
  height: string;
}

function CustomListItem({ src, alt, height }: CustomListItemProps) {
  return (
    <ListItem
      display="inline-block"
      margin="10px 20px 1px"
      padding="5px 0"
      verticalAlign="middle"
      width="140px"
      listStyleType="none"
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <Image
          src={"./image/logo/" + src}
          alt={alt}
          maxHeight={height + "px"}
          width="auto"
          height="auto"
          maxWidth="100%"
        />
      </Box>
    </ListItem>
  );
}
export { ClientsArea };
