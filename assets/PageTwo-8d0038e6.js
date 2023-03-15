import { j as jsxs, a as jsx, i as increment, d as decrement, b as incrementBySAnmount } from "./index-110c2d0a.js";
import { u as useAppSelector, a as useAppDispatch } from "./useReduxtoolkit-a40837a2.js";
import "./vender-90439cfe.js";
function PageTwo() {
  const count = useAppSelector((state) => state.counter.value);
  const name = useAppSelector((state) => state.counter.name);
  const dispatch = useAppDispatch();
  return /* @__PURE__ */ jsxs("div", { children: [
    "PageTwo",
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("span", { children: [
        count,
        name
      ] }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(
        "button",
        {
          "aria-label": "Increment value",
          onClick: () => dispatch(increment()),
          children: "Increment"
        }
      ),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(
        "button",
        {
          "aria-label": "Decrement value",
          onClick: () => dispatch(decrement()),
          children: "Decrement"
        }
      ),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(
        "button",
        {
          "aria-label": "Increment value",
          onClick: () => dispatch(incrementBySAnmount({
            value: 10,
            name: "yyf"
          })),
          children: "payload"
        }
      )
    ] }) })
  ] });
}
export {
  PageTwo as default
};
