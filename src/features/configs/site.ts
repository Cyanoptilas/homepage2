interface siteConfig {
  name: string;
  description: string;
  mainNav: IMenuItem[];
}

export interface IMenuItem {
  id?: string;
  title: string;
  href: string;
  items?: IMenuItem[];
}

export const siteConfig: siteConfig = {
  name: "SmartHR",
  description: "課題アプリ作り",
  mainNav: [
    {
      id: "1",
      title: "SmartHRとは",
      href: "",
      items: [
        {
          title: "SmartHRの特徴",
          href: "https://smarthr.jp/smarthr/",
          items: [
            {
              title: "SmartHRで始める\n人材マネジメント",
              href: "https://smarthr.jp/hr-management/",
            },
            {
              title: "SmartHRで\n業務はどう変わる？",
              href: "https://smarthr.jp/hr-management/",
            },
            {
              title: "充実のサポート",
              href: "https://smarthr.jp/support-contents/",
            },
            {
              title: "安心のセキュリティ",
              href: "https://smarthr.jp/security/",
            },
            {
              title: "豊富な外部連携サービス",
              href: "https://smarthr.jp/function/cooperation/",
            },
          ],
        },
        { title: "SmartHRの想い", href: "https://smarthr.jp/servicevision/" },
      ],
    },
    {
      id: "2",
      title: "機能",
      href: "/",
      items: [
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
    },
    {
      id: "3",
      title: "料金",
      href: "/",
      items: [
        {
          title: "料金プラン",
          href: "",
        },
        {
          title: "コスト削減シミュレーター",
          href: "",
        },
      ],
    },
    {
      id: "4",
      title: "導入事例",
      href: "/",
      items: [
        {
          title: "導入事例",
          href: "",
        },
        {
          title: "導入企業一覧",
          href: "",
        },
      ],
    },
    {
      id: "5",
      title: "お知らせ",
      href: "/",
      items: [
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
    },
  ],
};

// This ensures that the icon CSS is loaded immediately before attempting to render icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false;
