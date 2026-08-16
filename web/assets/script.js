(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./chips.js"), null);
    return;
  }

  const app = factory(root.CHIP_DATA, root.document);
  root.ChipSpecVisualizerApp = app;
  const start = function () {
    app.mount(root.document, root.CHIP_DATA);
  };
  if (root.document.readyState === "loading") {
    root.document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function (CHIP_DATA, document) {
  "use strict";

  if (!CHIP_DATA || !Array.isArray(CHIP_DATA.chips)) {
    throw new Error("芯片规格数据加载失败。");
  }

  function clear(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }

  function el(doc, tag, className, text) {
    const node = doc.createElement(tag);
    if (className) {
      node.className = className;
    }
    if (text !== undefined && text !== null) {
      node.textContent = text;
    }
    return node;
  }

  function chipMatches(chip, query) {
    if (!query) {
      return true;
    }
    const haystack = [chip.vendor, chip.name, chip.tagline].join(" ").toLowerCase();
    return haystack.includes(query.toLowerCase());
  }

  const ROW_ORDER = [
    "FP4 算力",
    "FP8 算力",
    "BF16 / FP16 算力",
    "FP32 算力",
    "显存容量",
    "显存带宽",
    "Host2Device 带宽",
    "节点内互联带宽",
    "节点间互联带宽"
  ];

  function mount(doc, data) {
    const chips = data.chips;
    const refs = {
      count: doc.getElementById("chip-count"),
      search: doc.getElementById("chip-search"),
      list: doc.getElementById("chip-list"),
      listEmpty: doc.getElementById("chip-list-empty"),
      compareGrid: doc.getElementById("compare-grid"),
      compareEmpty: doc.getElementById("compare-empty")
    };

    let selectedIds = chips.length ? [chips[0].id] : [];

    refs.count.textContent = chips.length + " 款芯片";

    function renderList() {
      const query = refs.search.value.trim();
      const visible = chips.filter(function (chip) {
        return chipMatches(chip, query);
      });
      clear(refs.list);
      refs.listEmpty.hidden = visible.length > 0;
      visible.forEach(function (chip) {
        const button = el(doc, "button", "chip-item");
        button.type = "button";
        button.setAttribute("role", "option");
        const selected = selectedIds.includes(chip.id);
        button.setAttribute("aria-selected", String(selected));
        if (selected) {
          button.classList.add("is-selected");
        }

        const textWrap = el(doc, "span", "chip-item-text");
        textWrap.appendChild(el(doc, "strong", "", chip.name));
        textWrap.appendChild(el(doc, "small", "", chip.tagline));
        button.appendChild(el(doc, "span", "chip-item-vendor", chip.vendor));
        button.appendChild(textWrap);
        button.addEventListener("click", function () {
          if (selectedIds.includes(chip.id)) {
            selectedIds = selectedIds.filter(function (id) {
              return id !== chip.id;
            });
          } else {
            selectedIds = selectedIds.concat(chip.id);
          }
          renderList();
          renderCompare();
        });
        refs.list.appendChild(button);
      });
    }

    function makeHelpButton(doc, label, hint) {
      const help = el(doc, "button", "row-help", "?");
      help.type = "button";
      help.setAttribute("aria-label", label + "说明");
      help.setAttribute("data-tooltip", hint);
      return help;
    }

    function renderCompare() {
      const selected = chips.filter(function (chip) {
        return selectedIds.includes(chip.id);
      });
      clear(refs.compareGrid);
      refs.compareEmpty.hidden = selected.length > 0;
      if (!selected.length) {
        return;
      }

      const selectedLabels = [];
      selected.forEach(function (chip) {
        chip.summary.forEach(function (item) {
          if (!selectedLabels.includes(item.label)) {
            selectedLabels.push(item.label);
          }
        });
      });
      const labels = ROW_ORDER.filter(function (label) {
        return selectedLabels.includes(label);
      }).concat(selectedLabels.filter(function (label) {
        return !ROW_ORDER.includes(label);
      }));

      refs.compareGrid.style.gridTemplateColumns = "minmax(120px, 0.7fr) "
        + selected.map(function () { return "minmax(0, 1fr)"; }).join(" ");

      const corner = el(doc, "div", "compare-cell compare-corner");
      refs.compareGrid.appendChild(corner);
      selected.forEach(function (chip) {
        const head = el(doc, "div", "compare-cell compare-head");
        head.appendChild(el(doc, "span", "compare-vendor", chip.vendor));
        head.appendChild(el(doc, "strong", "compare-name", chip.name));
        head.appendChild(el(doc, "small", "compare-tagline", chip.tagline));
        const link = el(doc, "a", "compare-source", "规格来源 ↗");
        link.href = chip.source_url;
        link.target = "_blank";
        link.rel = "noopener";
        link.setAttribute("aria-label", chip.name + " " + chip.source_label);
        head.appendChild(link);
        refs.compareGrid.appendChild(head);
      });

      labels.forEach(function (label, labelIndex) {
        const lastRow = labelIndex === labels.length - 1;
        const labelCell = el(doc, "div", "compare-cell compare-label"
          + (lastRow ? " compare-last-row" : ""), label);
        refs.compareGrid.appendChild(labelCell);

        selected.forEach(function (chip, chipIndex) {
          const item = chip.summary.find(function (entry) {
            return entry.label === label;
          });
          const cell = el(doc, "div", "compare-cell compare-value"
            + (lastRow ? " compare-last-row" : ""));
          if (item) {
            cell.appendChild(doc.createTextNode(item.value));
            if (item.hint) {
              const help = makeHelpButton(doc, label, item.hint);
              if (chipIndex === selected.length - 1) {
                help.classList.add("row-help-end");
              }
              cell.appendChild(help);
            }
          } else {
            cell.appendChild(el(doc, "span", "compare-na", "—"));
          }
          refs.compareGrid.appendChild(cell);
        });
      });
    }

    refs.search.addEventListener("input", renderList);

    renderList();
    renderCompare();

    return { renderList: renderList, renderCompare: renderCompare };
  }

  return { mount: mount, chipMatches: chipMatches };
});
