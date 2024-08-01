import { navbar } from "vuepress-theme-hope";

export default navbar([

  { text: "首页", icon: "home", link: "/" },

  { text: "学习笔记", icon: "wand-magic-sparkles", link: "/study-notes/" },

  {
    text: "面试指南",
    icon: "pen-to-square",
    link: "/interview-related/"
  },


  { text: "杂记", icon: "eye",  link: "/problem-record/" },
  { text: "笔记总结", icon: "eye",  link: "/note-record/" },
  {text: 'web3系列', icon: 'fire', link: '/web3/'},
  {text: 'Vue系列', icon: 'fire', link: '/vue/'},
  {text: "博客相关", icon: "blog", link: "/about-the-blogs/"},

]);
