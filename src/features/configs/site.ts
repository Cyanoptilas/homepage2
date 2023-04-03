interface siteConfig {
  name: string;
  description: string;
  mainNav: {
    title: string;
    href: string;
  }[];
  menuItems1AboutSmartHR: {
    title: string;
    href: string;
    items?: {
      title: string;
      href: string;
    }[];
  }[];
  menuItems2Function: {
    title: string;
    href: string;
    items?: {
      title: string;
      href: string;
    }[];
  }[];
  menuItems3Cost: {
    title: string;
    href: string;
  }[];
  menuItems4Examples: {
    title: string;
    href: string;
  }[];
  menuItems5News: {
    title: string;
    href: string;
  }[];
}

export const siteConfig: siteConfig = {
  name: "SmartHR",
  description: "課題アプリ作り",
  mainNav: [
    { title: "SmartHRとは", href: "/" },
    { title: "機能", href: "/" },
    { title: "料金", href: "/" },
    { title: "導入事例", href: "/" },
    { title: "お知らせ", href: "/" },
    { title: "イベント", href: "/" },
    { title: "ログイン", href: "/" },
  ],
  menuItems1AboutSmartHR: [
    {
      title: "SmartHRの特徴",
      href: "",
      items: [
        { title: "SmartHRで始める人材マネジメント", href: "" },
        { title: "SmartHRで業務はどう変わる？", href: "" },
        { title: "充実のサポート", href: "" },
        { title: "豊富な外部連携サービス", href: "" },
      ],
    },
    { title: "SmartHRの想い", href: "" },
  ],
  menuItems2Function: [
    {
      title: "人事・労務管理",
      href: "",
      items: [
        { title: "入社手続き・雇用契約", href: "" },
        { title: "文書配布", href: "" },
        { title: "年末調整", href: "" },
        { title: "マイナンバー管理", href: "" },
        { title: "申請承認機能", href: "" },
        { title: "お知らせ掲示板", href: "" },
        { title: "予約管理", href: "" },
        { title: "Web給与明細", href: "" },
        { title: "CSVカスタムダウンロード", href: "" },
        { title: "多言語化対応機能", href: "" },
      ],
    },
    {
      title: "タレントマネジメント",
      href: "",
      items: [
        { title: "従業員データベース", href: "" },
        { title: "人事評価", href: "" },
        { title: "配置シミュレーション", href: "" },
        { title: "従業員サーベイ", href: "" },
        { title: "ラクラク分析サポート", href: "" },
        { title: "カスタム社員名簿", href: "" },
        { title: "組織図", href: "" },
      ],
    },
    {
      title: "アプリでもっと便利に",
      href: "",
      items: [{ title: "SmartHR Plus β版", href: "" }],
    },
  ],
  menuItems3Cost: [
    {
      title: "料金プラン",
      href: "",
    },
    {
      title: "コスト削減シミュレーター",
      href: "",
    },
  ],
  menuItems4Examples: [
    {
      title: "導入事例",
      href: "",
    },
    {
      title: "導入企業一覧",
      href: "",
    },
  ],
  menuItems5News: [
    {
      title: "ニュース",
      href: "",
    },
    {
      title: "プレスリリース",
      href: "",
    },
    {
      title: "アップデート情報",
      href: "",
    },
    {
      title: "メンテナンス・障害情報",
      href: "",
    },
  ],
};
