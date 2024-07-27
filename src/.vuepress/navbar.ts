import { navbar } from "vuepress-theme-hope";

export default navbar([

  { text: "首页", icon: "home", link: "/" },

  { text: "学习笔记", icon: "note", link: "/study-notes/" },

  {
    text: "面试指南",
    icon: "pen-to-square",
    link: "/interview-related/"
  },

  {text: "博客相关", icon: "blog", link: "/about-the-blogs/"},

  { text: "笔记", icon: "eye",  link: "/problem-record/" },

  {
    text: 'Vue系列',
    icon: 'VSue',
    link: '/vue/'
  },

  {
    text: "博文",
    icon: "pen-to-square",
    link: "/posts/",
  },




]);
