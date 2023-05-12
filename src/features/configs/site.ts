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
            {
              title: "入社手続き・雇用契約",
              href: "https://smarthr.jp/function/agreement/",
            },
            {
              title: "文書配布",
              href: "https://smarthr.jp/function/distribution/",
            },
            { title: "年末調整", href: "https://smarthr.jp/function/nc/" },
            {
              title: "マイナンバー管理",
              href: "https://smarthr.jp/function/my-number/",
            },
            {
              title: "申請承認機能",
              href: "https://smarthr.jp/function/application-approval/",
            },
            {
              title: "お知らせ掲示板",
              href: "https://smarthr.jp/function/notice/",
            },
            { title: "予約管理", href: "https://smarthr.jp/function/reserve/" },
            {
              title: "Web給与明細",
              href: "https://smarthr.jp/function/salary/",
            },
            {
              title: "CSVカスタムダウンロード",
              href: "https://smarthr.jp/function/csv/",
            },
            {
              title: "多言語化対応機能",
              href: "https://smarthr.jp/function/#languageFunctionCard",
            },
          ],
        },
        {
          title: "タレントマネジメント",
          href: "",
          items: [
            {
              title: "従業員データベース",
              href: "https://smarthr.jp/function/database/",
            },
            {
              title: "人事評価",
              href: "https://smarthr.jp/function/evaluation/",
            },
            {
              title: "配置シミュレーション",
              href: "https://smarthr.jp/function/simulation/",
            },
            {
              title: "従業員サーベイ",
              href: "https://smarthr.jp/function/survey/",
            },
            {
              title: "ラクラク分析サポート",
              href: "https://smarthr.jp/function/report/",
            },
            {
              title: "カスタム社員名簿",
              href: "https://smarthr.jp/function/meibo/",
            },
            { title: "組織図", href: "https://smarthr.jp/function/meibo/" },
          ],
        },
        {
          title: "アプリでもっと便利に",
          href: "",
          items: [
            { title: "SmartHR Plus β版", href: "https://soroban.smarthr.jp/" },
          ],
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
          href: "https://smarthr.jp/pricing/",
        },
        {
          title: "コスト削減シミュレーター",
          href: "https://soroban.smarthr.jp/",
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
          href: "https://smarthr.jp/case/",
        },
        {
          title: "導入企業一覧",
          href: "https://smarthr.jp/case/list.html",
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
          href: "https://smarthr.jp/news/",
        },
        {
          title: "プレスリリース",
          href: "https://smarthr.jp/release/",
        },
        {
          title: "アップデート情報",
          href: "https://smarthr.jp/update/",
        },
        {
          title: "メンテナンス・障害情報",
          href: "https://smarthr.jp/support/",
        },
      ],
    },
  ],
};
