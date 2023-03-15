import { j as jsxs, a as jsx } from "./index-337494ae.js";
import { r as reactExports } from "./vender-90439cfe.js";
const useMount = (callBack) => {
  reactExports.useEffect(() => {
    callBack == null ? void 0 : callBack();
  }, []);
};
const useUnMount = (callBack) => {
  reactExports.useEffect(() => {
    return () => {
      callBack == null ? void 0 : callBack();
    };
  }, []);
};
const getList = () => {
  const result = [];
  for (let i = 0; i < 100; i++) {
    result.push(i);
  }
  return result;
};
function HomePage() {
  useMount(() => {
    console.log("page mount");
  });
  useUnMount(() => {
    console.log("page unMount");
  });
  return /* @__PURE__ */ jsxs("div", { children: [
    "HomePage",
    /* @__PURE__ */ jsx("ul", { children: getList().map((item) => {
      return /* @__PURE__ */ jsx(
        "li",
        {
          draggable: true,
          style: { textAlign: "center" },
          children: item
        },
        item
      );
    }) })
  ] });
}
export {
  HomePage as default
};
