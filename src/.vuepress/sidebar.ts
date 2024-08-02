import { sidebar } from "vuepress-theme-hope";

// @ts-ignore
import { aboutTheBlogs } from "./sidebar/about-the-blogs";
// @ts-ignore
import {interviewRelated} from "./sidebar/interview-related";
// @ts-ignore
import { learnNote } from "./sidebar/learn-note";
import {noteRecord} from "./sidebar/note-record.js";


//  侧边栏
export default sidebar({

  // 导航栏每一项对应自己的目录
  "/study-notes/": learnNote,
  "/about-the-blogs/":aboutTheBlogs,

  "/post/":"structure",
  "/interview-related/":"structure",
  "/web3/": "structure",
  //  也可以这样自动生成目录  默认的README.md 就不要了 否则无法生成目录页
  //"/interview-related/":"structure",

  // "/tools/":tools,
  // "/about-the-blogs/": aboutTheBlogs,
  //
  // "/posts/": posts,
  // "/other/": other,
  "/problem-record/": "structure",
  "/note-record/": noteRecord,

  // "/learning-practice/": learningPractice,
  // "/knowledge-accumulation/": knowledgeAccumulation,
  // // 一个文件夹下面全为md文件
  // "/vue/": "structure",

});
