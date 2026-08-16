/*
 * AI chip / system specification data.
 * Values are curated from official vendor specification pages.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.CHIP_DATA = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";
  return {
    metadata: {
      note: "数据整理自厂商官方规格页。除特别说明外，算力为单卡（单 GPU）稠密数值，不含稀疏加速。",
      retrieved_at: "2026-08-16"
    },
    chips: [
      {
        id: "h200-sxm",
        vendor: "NVIDIA",
        name: "H200 SXM",
        tagline: "Hopper 架构 GPU，141GB HBM3e",
        badges: ["Hopper", "SXM", "NVLink 4"],
        summary: [
          { label: "FP8 算力", value: "1979 TFLOPS", hint: "官方标称 3958 TFLOPS 为稀疏（with sparsity）数值，表中为稠密值（稀疏的一半）。" },
          { label: "BF16 / FP16 算力", value: "989 TFLOPS", hint: "官方标称 1979 TFLOPS 为稀疏（with sparsity）数值，表中为稠密值（稀疏的一半）。" },
          { label: "FP32 算力", value: "67 TFLOPS" },
          { label: "显存容量", value: "141 GB HBM3e" },
          { label: "显存带宽", value: "4.8 TB/s" },
          { label: "Host2Device 带宽", value: "PCIe Gen5 128 GB/s（双向）", hint: "H200 SXM 主机接口为 PCIe Gen5 x16，单向约 64 GB/s、双向合计 128 GB/s。" },
          { label: "节点内互联带宽", value: "NVLink 900 GB/s" }
        ],
        source_label: "NVIDIA H200 官方规格页",
        source_url: "https://www.nvidia.com/en-us/data-center/h200/"
      },
      {
        id: "dgx-b200",
        vendor: "NVIDIA",
        name: "DGX B200",
        tagline: "8x NVIDIA Blackwell GPU AI 系统",
        badges: ["Blackwell", "SXM", "10U 机架", "NVLink Switch"],
        summary: [
          { label: "FP4 算力", value: "9000 TFLOPS" },
          { label: "FP8 算力", value: "4500 TFLOPS" },
          { label: "BF16 / FP16 算力", value: "2250 TFLOPS" },
          { label: "FP32 算力", value: "75 TFLOPS" },
          { label: "显存容量", value: "180 GB HBM3e" },
          { label: "显存带宽", value: "8 TB/s" },
          { label: "Host2Device 带宽", value: "PCIe Gen5 128 GB/s（双向）", hint: "DGX B200 用 Intel Xeon CPU，SXM GPU 与 CPU 之间走 PCIe Gen5 x16，单向约 64 GB/s、双向合计 128 GB/s。" },
          { label: "节点内互联带宽", value: "NVLink 1.8 TB/s" },
          { label: "节点间互联带宽", value: "50 GB/s（InfiniBand / Ethernet）", hint: "每 GPU 一个 ConnectX-7 端口，400 Gb/s = 50 GB/s。" }
        ],
        source_label: "NVIDIA DGX B200 官方规格页",
        source_url: "https://resources.nvidia.com/en-us-dgx-systems/dgx-b200-datasheet"
      },
      {
        id: "dgx-b300",
        vendor: "NVIDIA",
        name: "DGX B300",
        tagline: "8x NVIDIA Blackwell Ultra SXM AI 系统",
        badges: ["Blackwell Ultra", "SXM", "10U 机架", "NVLink Switch"],
        summary: [
          { label: "FP4 算力", value: "13500 TFLOPS" },
          { label: "FP8 算力", value: "4500 TFLOPS" },
          { label: "BF16 / FP16 算力", value: "2250 TFLOPS" },
          { label: "FP32 算力", value: "75 TFLOPS" },
          { label: "显存容量", value: "288 GB HBM3e" },
          { label: "显存带宽", value: "8 TB/s" },
          { label: "Host2Device 带宽", value: "PCIe Gen5 128 GB/s（双向）", hint: "DGX B300 用 Intel Xeon CPU，SXM GPU 与 CPU 之间走 PCIe Gen5 x16，单向约 64 GB/s、双向合计 128 GB/s。" },
          { label: "节点内互联带宽", value: "NVLink 1.8 TB/s" },
          { label: "节点间互联带宽", value: "100 GB/s（InfiniBand / Ethernet）", hint: "每 GPU 一个 ConnectX-8 端口，800 Gb/s = 100 GB/s。" }
        ],
        source_label: "NVIDIA DGX B300 官方规格页",
        source_url: "https://www.nvidia.com/en-us/data-center/dgx-b300/"
      },
      {
        id: "gb300-nvl72",
        vendor: "NVIDIA",
        name: "GB300 NVL72",
        tagline: "72x Blackwell Ultra GPU + 36x Grace CPU 机架级系统",
        badges: ["Blackwell Ultra", "NVL72", "Grace CPU", "液冷", "NVLink Switch"],
        summary: [
          { label: "FP4 算力", value: "15000 TFLOPS" },
          { label: "FP8 算力", value: "5000 TFLOPS" },
          { label: "BF16 / FP16 算力", value: "2500 TFLOPS" },
          { label: "FP32 算力", value: "83 TFLOPS" },
          { label: "显存容量", value: "288 GB HBM3e" },
          { label: "显存带宽", value: "8 TB/s" },
          { label: "Host2Device 带宽", value: "NVLink-C2C 900 GB/s" },
          { label: "节点内互联带宽", value: "NVLink 1.8 TB/s" },
          { label: "节点间互联带宽", value: "100 GB/s（InfiniBand / Ethernet）", hint: "每 GPU 一个 ConnectX-8 端口，800 Gb/s = 100 GB/s。" }
        ],
        source_label: "NVIDIA GB300 NVL72 官方规格页",
        source_url: "https://www.nvidia.com/en-us/data-center/gb300-nvl72/"
      },
      {
        id: "ascend-950dt-36core",
        vendor: "华为",
        name: "昇腾 950DT 547T 144GB",
        tagline: "36 Cube Core + 72 Vector Core，144GB 片上内存",
        badges: ["达芬奇 3.0", "MXFP4 / HiF8", "灵衢 UB", "Chiplet 合封"],
        summary: [
          { label: "FP4 算力", value: "1946 TFLOPS", hint: "表中为 Cube（张量核）MXFP4 算力；含 Vector 的总算力为 2007 TFLOPS。数据来自昇腾 950 NPU 架构白皮书（表 3-1）。" },
          { label: "FP8 算力", value: "973 TFLOPS", hint: "Cube（张量核）HiF8/MXFP8/FP8 算力；含 Vector 的总算力为 1034 TFLOPS。" },
          { label: "BF16 / FP16 算力", value: "486 TFLOPS", hint: "Cube（张量核）算力；含 Vector 的总算力为 547 TFLOPS。" },
          { label: "FP32 算力", value: "30 TFLOPS", hint: "Vector Core 的 FP32 算力；Cube 的 TF32 算力为 243 TFLOPS。" },
          { label: "显存容量", value: "144 GB HBM" },
          { label: "显存带宽", value: "4 TB/s" },
          { label: "Host2Device 带宽", value: "PCIe 5.0 128 GB/s（双向）", hint: "昇腾 950 集成 72 Lane HiLink SerDes（18 个 X4 端口），对外提供 PCIe 5.0 x16（与灵衢 UB 共用 4 个端口），双向合计 128 GB/s。" },
          { label: "节点内互联带宽", value: "700 GB/s（双向）", hint: "节点 8 卡内每对 NPU 间互联带宽 100 GB/s（双向），总互联带宽 7 × 100 = 700 GB/s（双向）。" },
          { label: "节点间互联带宽", value: "800 GB/s（双向）", hint: "节点间互联：8 × 100 = 800 GB/s（双向），仅限柜内互联，最大 64 卡。" }
        ],
        source_label: "昇腾 950 NPU 架构白皮书",
        source_url: "https://public-download.obs.cn-east-2.myhuaweicloud.com/ascend/%E6%98%87%E8%85%BE950%20NPU%E6%9E%B6%E6%9E%84%E7%99%BD%E7%9A%AE%E4%B9%A6.pdf"
      },
      {
        id: "ascend-950dt-32core",
        vendor: "华为",
        name: "昇腾 950DT 486T 96GB",
        tagline: "32 Cube Core + 64 Vector Core，96GB 片上内存",
        badges: ["达芬奇 3.0", "MXFP4 / HiF8", "灵衢 UB", "Chiplet 合封"],
        summary: [
          { label: "FP4 算力", value: "1730 TFLOPS", hint: "表中为 Cube（张量核）MXFP4 算力；含 Vector 的总算力为 1784 TFLOPS。数据来自昇腾 950 NPU 架构白皮书（表 3-1）。" },
          { label: "FP8 算力", value: "865 TFLOPS", hint: "Cube（张量核）HiF8/MXFP8/FP8 算力；含 Vector 的总算力为 919 TFLOPS。" },
          { label: "BF16 / FP16 算力", value: "432 TFLOPS", hint: "Cube（张量核）算力；含 Vector 的总算力为 486 TFLOPS。" },
          { label: "FP32 算力", value: "27 TFLOPS", hint: "Vector Core 的 FP32 算力；Cube 的 TF32 算力为 216 TFLOPS。" },
          { label: "显存容量", value: "96 GB HBM" },
          { label: "显存带宽", value: "4 TB/s" },
          { label: "Host2Device 带宽", value: "PCIe 5.0 128 GB/s（双向）", hint: "昇腾 950 集成 72 Lane HiLink SerDes（18 个 X4 端口），对外提供 PCIe 5.0 x16（与灵衢 UB 共用 4 个端口），双向合计 128 GB/s。" },
          { label: "节点内互联带宽", value: "700 GB/s（双向）", hint: "节点 8 卡内每对 NPU 间互联带宽 100 GB/s（双向），总互联带宽 7 × 100 = 700 GB/s（双向）。" },
          { label: "节点间互联带宽", value: "800 GB/s（双向）", hint: "节点间互联：8 × 100 = 800 GB/s（双向），仅限柜内互联，最大 64 卡。" }
        ],
        source_label: "昇腾 950 NPU 架构白皮书",
        source_url: "https://public-download.obs.cn-east-2.myhuaweicloud.com/ascend/%E6%98%87%E8%85%BE950%20NPU%E6%9E%B6%E6%9E%84%E7%99%BD%E7%9A%AE%E4%B9%A6.pdf"
      },
      {
        id: "ascend-950dt-28core",
        vendor: "华为",
        name: "昇腾 950DT 425T 96GB",
        tagline: "28 Cube Core + 56 Vector Core，96GB 片上内存",
        badges: ["达芬奇 3.0", "MXFP4 / HiF8", "灵衢 UB", "Chiplet 合封"],
        summary: [
          { label: "FP4 算力", value: "1513 TFLOPS", hint: "表中为 Cube（张量核）MXFP4 算力；含 Vector 的总算力为 1561 TFLOPS。数据来自昇腾 950 NPU 架构白皮书（表 3-1）。" },
          { label: "FP8 算力", value: "756 TFLOPS", hint: "Cube（张量核）HiF8/MXFP8/FP8 算力；含 Vector 的总算力为 804 TFLOPS。" },
          { label: "BF16 / FP16 算力", value: "378 TFLOPS", hint: "Cube（张量核）算力；含 Vector 的总算力为 425 TFLOPS。" },
          { label: "FP32 算力", value: "23 TFLOPS", hint: "Vector Core 的 FP32 算力；Cube 的 TF32 算力为 189 TFLOPS。" },
          { label: "显存容量", value: "96 GB HBM" },
          { label: "显存带宽", value: "4 TB/s" },
          { label: "Host2Device 带宽", value: "PCIe 5.0 128 GB/s（双向）", hint: "昇腾 950 集成 72 Lane HiLink SerDes（18 个 X4 端口），对外提供 PCIe 5.0 x16（与灵衢 UB 共用 4 个端口），双向合计 128 GB/s。" },
          { label: "节点内互联带宽", value: "700 GB/s（双向）", hint: "节点 8 卡内每对 NPU 间互联带宽 100 GB/s（双向），总互联带宽 7 × 100 = 700 GB/s（双向）。" },
          { label: "节点间互联带宽", value: "800 GB/s（双向）", hint: "节点间互联：8 × 100 = 800 GB/s（双向），仅限柜内互联，最大 64 卡。" }
        ],
        source_label: "昇腾 950 NPU 架构白皮书",
        source_url: "https://public-download.obs.cn-east-2.myhuaweicloud.com/ascend/%E6%98%87%E8%85%BE950%20NPU%E6%9E%B6%E6%9E%84%E7%99%BD%E7%9A%AE%E4%B9%A6.pdf"
      }
    ]
  };
});
