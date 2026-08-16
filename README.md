# AI 芯片规格可视化（AI Chip Spec Visualizer）

一个用于探索和对比 AI 加速芯片规格参数的静态网页工具，目前收录了
NVIDIA H200 SXM、DGX B200、DGX B300、GB300 NVL72 和昇腾 950DT（547T 144GB /
486T 96GB / 425T 96GB 三个版本），展示单卡的算力、显存容量、
显存带宽和互联带宽。

## 对比功能

左侧点击芯片即可将其加入或移出对比（可多选），右侧对比表会为每款选中的
芯片新增一列，行是所有选中芯片的规格项并集，缺失项显示为 "—"。
数值后附带的 "?" 悬浮提示会展示该数据的推导过程（在数据中用 `hint` 字段配置）。

## 使用方式

直接用浏览器打开 `web/index.html`，无需构建或启动服务器。

## 目录结构

```
web/
  index.html          页面骨架、主题切换
  assets/
    styles.css        玻璃拟态设计变量，浅色/深色主题
    chips.js          芯片规格数据（UMD，也可在 Node 中加载）
    script.js         渲染：芯片列表、搜索筛选、两列规格表
```

## 添加新芯片

在 `web/assets/chips.js` 的 `chips` 数组中追加条目：

- `vendor` / `name` / `tagline` / `badges`：左侧列表和详情头部的展示信息。
- `summary`：对比表的行，每行一个 `{ label, value, hint? }`，
  建议覆盖算力、显存容量、显存带宽、互联带宽（单卡口径）。
- `source_label` / `source_url`：列头展示的规格来源链接。

浅色/深色主题偏好保存在 `localStorage` 的 `chip-theme` 中。
