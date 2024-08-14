import { defineUserConfig } from "vuepress";
//import { docsearchPlugin } from '@vuepress/plugin-docsearch'
// @ts-ignore
import { getDirname, path } from "vuepress/utils";

import theme from "./theme.js";
// @ts-ignore
const __dirname = getDirname(import.meta.url);

export default defineUserConfig({

  base: "/",

  lang: "zh-CN",
  title: "撄宁的博客",
  description: "撄宁的博客",
  //port:8099,
  theme,
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
        __dirname,
        "./components/BlogHero.vue",
    ),
  },
  // 注意：Algolia DocSearch 是一个免费服务，但您需要通过官方渠道申请以获得应用 ID、API 密钥和索引名称。申请成功后，您才能使用 @vuepress/plugin-docsearch 插件。
  plugins: [
    // docsearchPlugin({
    //   appId: '<APP_ID>',
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>',
    //   locales: {
    //     '/': {
    //       placeholder: '搜索文档',
    //       translations: {
    //         button: {
    //           buttonText: '搜索文档',
    //         },
    //       },
    //     },
    //   },
    // }),
  ],
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
