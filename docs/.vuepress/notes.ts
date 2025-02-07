import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */

const zhDemoNote = defineNoteConfig({
  dir: 'autumn-leaves',
  link: '/article',
  sidebar: [
    {
      text: '指南',
      prefix: '问题合集', // 使用 prefix 拼接，可以简写 下面的 items 中的 link 为相对路径
      collapsed: false,
      items: [
      // 可以混用 string 和 SidebarItem
        { text: '脚本介绍', link: "Info"},
        { text: '安装脚本', link: "Installation"},
        { text: '已知问题', link: "Issues"},
      ],
    },
    {
      text: '教程',
      prefix: '详细教程', // 使用 prefix 拼接，可以简写 下面的 items 中的 link 为相对路径
      collapsed: false,
      items: [
      // 可以混用 string 和 SidebarItem
        { text: '安卓', link: "安卓/咕咕咕"},
        { text: 'Linux', link: "Linux/咕咕咕"},
      ],
    },
  ]
})

export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [zhDemoNote],
})

