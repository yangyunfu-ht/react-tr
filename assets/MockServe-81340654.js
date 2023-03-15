import { a as jsx } from "./index-0ca6a71f.js";
import { r as reactExports, h as axios } from "./vender-90439cfe.js";
const MockServe = () => {
  reactExports.useEffect(() => {
    axios.get("/mock/api/statusList").then((res) => {
      console.log(res);
    });
    axios.post("/mock/api/logList", { page: 1, pageSize: 10 }).then((result) => {
      console.log(result);
    });
  }, []);
  return /* @__PURE__ */ jsx("div", { children: "MockServe" });
};
export {
  MockServe as default
};
