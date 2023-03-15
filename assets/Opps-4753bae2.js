import { j as jsxs, a as jsx } from "./index-110c2d0a.js";
import { g as useNavigate } from "./vender-90439cfe.js";
function Opps() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
        width: "100%"
      },
      children: [
        /* @__PURE__ */ jsx("h2", { children: "Opps" }),
        /* @__PURE__ */ jsx("h3", { children: "page no't found" }),
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("button", { onClick: () => navigate("/"), children: "go home" }) })
      ]
    }
  );
}
export {
  Opps as default
};
