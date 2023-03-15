import { j as jsxs, a as jsx } from "./index-110c2d0a.js";
import { C as Clipboard, r as reactExports } from "./vender-90439cfe.js";
const copyElementValue = (element) => {
  element.style.cssText += ";cursor: pointer";
  const ClipboardElement = new Clipboard(element, {
    text: () => element.innerHTML || element.innerText
  });
  ClipboardElement.on("success", () => {
    ClipboardElement.destroy();
  }), ClipboardElement.on("error", () => {
    ClipboardElement.destroy();
  });
  element.click();
};
const fetchDataList = (params) => {
  return {
    page: params.page,
    pageSize: params.pageSize,
    total: params.total,
    code: 200,
    message: "请求成功",
    data: [
      {
        name: "yyf",
        age: 25,
        phone: 18213800173
      },
      {
        name: "yyg",
        age: 30,
        phone: 15808858353
      }
    ]
  };
};
function usePagation(pagation = { page: 1, pageSize: 10, total: 0 }) {
  const [page, setPage] = reactExports.useState(pagation.page);
  const [pageSize, setPageSize] = reactExports.useState(pagation.pageSize);
  const [total, setTotal] = reactExports.useState(pagation.total);
  const [fetchResult, setFetchResult] = reactExports.useState(null);
  reactExports.useEffect(() => {
    setFetchResult(() => fetchDataList({ page, pageSize, total }));
  }, [page, pageSize, total]);
  return {
    page,
    pageSize,
    total,
    setPage,
    setPageSize,
    setTotal,
    fetchResult
  };
}
const pageOne = "";
function Pageone() {
  const { page, pageSize, total, setPage, setTotal, setPageSize, fetchResult } = usePagation();
  return /* @__PURE__ */ jsxs(reactExports.Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "page", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "page: ",
        page,
        /* @__PURE__ */ jsx("button", { onClick: () => setPage(page + 1), children: "changePage" })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "page size: ",
        pageSize,
        /* @__PURE__ */ jsx("button", { onClick: () => setPageSize(pageSize + 10), children: "changePageSize" })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "total: ",
        total,
        /* @__PURE__ */ jsx("button", { onClick: () => setTotal(total + 10), children: "changeTotal" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { onClick: (e) => copyElementValue(e.target), style: { color: "#000000" }, children: "Pageone" })
  ] });
}
export {
  Pageone as default
};
