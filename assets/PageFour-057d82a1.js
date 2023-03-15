import { j as jsxs, a as jsx, c as changeCurrentPage, e as changePageSize } from "./index-0ca6a71f.js";
import { u as useAppSelector, a as useAppDispatch } from "./useReduxtoolkit-a40837a2.js";
import "./vender-90439cfe.js";
function PageFour() {
  const currentPageCount = useAppSelector((state) => state.pageer.currentPage);
  const currentPageSize = useAppSelector((state) => state.pageer.pageSize);
  const dispatch = useAppDispatch();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { children: [
      "currentPageCount: ",
      currentPageCount
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      "currentPageSize: ",
      currentPageSize
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("button", { onClick: () => dispatch(changeCurrentPage()), children: "change currentPageCount" }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("button", { onClick: () => dispatch(changePageSize()), children: "change currentPageSize" }) })
    ] })
  ] });
}
export {
  PageFour as default
};
