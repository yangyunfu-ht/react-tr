import { j as jsxRuntimeExports, c as createSlice, a as configureStore, r as reactExports, L as Link, u as useLocation, O as Outlet, b as useRoutes, d as createRoot, B as BrowserRouter, P as Provider } from "./vender-90439cfe.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const jsx = jsxRuntimeExports.jsx;
const jsxs = jsxRuntimeExports.jsxs;
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    name: ""
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementBySAnmount: (state, action) => {
      state.value += action.payload.value;
      state.name = action.payload.name;
    }
  }
});
const { increment, decrement, incrementBySAnmount } = counterSlice.actions;
const counterReducer = counterSlice.reducer;
const pageSlice = createSlice({
  name: "pageSlice",
  initialState: {
    currentPage: 1,
    pageSize: 10
  },
  reducers: {
    changeCurrentPage: (state) => {
      state.currentPage += 1;
    },
    changePageSize: (state) => {
      state.pageSize += 10;
    }
  }
});
const { changeCurrentPage, changePageSize } = pageSlice.actions;
const pageSlice$1 = pageSlice.reducer;
const store = configureStore({
  reducer: {
    counter: counterReducer,
    pageer: pageSlice$1
  }
});
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    const isBaseRelative = !!importerUrl;
    if (isBaseRelative) {
      for (let i = links.length - 1; i >= 0; i--) {
        const link2 = links[i];
        if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
          return;
        }
      }
    } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
const AppLayout$1 = "";
const AppRouterList = [
  {
    path: "/",
    name: "首页",
    author: true
  },
  {
    path: "/page/1",
    name: "星际迷航",
    author: true
  },
  {
    path: "/page/2",
    name: "哥斯拉大战金刚",
    author: true
  },
  {
    path: "/page/3",
    name: "阿凡达",
    author: true
  },
  {
    path: "/page/4",
    name: "康熙王朝",
    author: true
  },
  {
    path: "/opps",
    name: "雍正王朝Opps",
    author: true
  },
  {
    path: "/editor",
    name: "富文本编辑器",
    author: true
  },
  {
    path: "/mock",
    name: "vite-plugin-mock",
    author: true
  }
];
function AppAside() {
  const [searchValue, setSearchValue] = reactExports.useState("");
  return /* @__PURE__ */ jsxs(reactExports.Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "searchInput", children: /* @__PURE__ */ jsx(
      "input",
      {
        type: "search",
        value: searchValue,
        onChange: (e) => setSearchValue(e.target.value),
        placeholder: "search something..."
      }
    ) }),
    /* @__PURE__ */ jsx("ul", { children: AppRouterList.map((router) => {
      return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: router.path, children: router.name }) }, router.name);
    }) })
  ] });
}
const returnUrlRecord = () => {
  const { pathname } = useLocation();
  const name = "yyf";
  const age = 23;
  return {
    pathname,
    name,
    age
  };
};
function AppLayout() {
  const { pathname, name, age } = returnUrlRecord();
  const [path, setPath] = reactExports.useState(pathname);
  useLocation();
  reactExports.useEffect(() => {
  }, [path]);
  return /* @__PURE__ */ jsx(reactExports.Fragment, { children: /* @__PURE__ */ jsxs("main", { style: { display: "flex", flexDirection: "row", height: "100vh", width: "100vw" }, className: "app-main", children: [
    /* @__PURE__ */ jsx("aside", { style: { width: "200px" }, className: "app-aside", children: /* @__PURE__ */ jsx(AppAside, {}) }),
    /* @__PURE__ */ jsxs("main", { style: { flex: "1" }, className: "app-content", children: [
      /* @__PURE__ */ jsx("header", { style: { height: "10vh", width: "100v", padding: "6px" }, className: "app-header", children: "header" }),
      /* @__PURE__ */ jsx("section", { style: { flex: "1", height: "calc(90vh - 72px)", padding: "6px", overflow: "auto" }, className: "app-main", children: /* @__PURE__ */ jsx(Outlet, {}) }),
      /* @__PURE__ */ jsx("footer", { style: { height: "60px", padding: "6px" }, className: "app-footer", children: "footer" })
    ] })
  ] }) });
}
const HomePage = reactExports.lazy(() => __vitePreload(() => import("./HomePage-dd21e85a.js"), true ? ["assets/HomePage-dd21e85a.js","assets/vender-90439cfe.js","assets/vender-78ec4503.css"] : void 0));
const Login = reactExports.lazy(() => __vitePreload(() => import("./Login-cce185d5.js"), true ? ["assets/Login-cce185d5.js","assets/vender-90439cfe.js","assets/vender-78ec4503.css"] : void 0));
const PageOne = reactExports.lazy(() => __vitePreload(() => import("./PageOne-8f0e15e6.js"), true ? ["assets/PageOne-8f0e15e6.js","assets/vender-90439cfe.js","assets/vender-78ec4503.css","assets/PageOne-b60d32db.css"] : void 0));
const PageTwo = reactExports.lazy(() => __vitePreload(() => import("./PageTwo-b4c8b874.js"), true ? ["assets/PageTwo-b4c8b874.js","assets/useReduxtoolkit-a40837a2.js","assets/vender-90439cfe.js","assets/vender-78ec4503.css"] : void 0));
const PageThree = reactExports.lazy(() => __vitePreload(() => import("./PageThree-94e666cd.js"), true ? ["assets/PageThree-94e666cd.js","assets/vender-90439cfe.js","assets/vender-78ec4503.css","assets/PageThree-3a344989.css"] : void 0));
const PageFour = reactExports.lazy(() => __vitePreload(() => import("./PageFour-5a559ceb.js"), true ? ["assets/PageFour-5a559ceb.js","assets/useReduxtoolkit-a40837a2.js","assets/vender-90439cfe.js","assets/vender-78ec4503.css"] : void 0));
const Oops = reactExports.lazy(() => __vitePreload(() => import("./Opps-67dd8169.js"), true ? ["assets/Opps-67dd8169.js","assets/vender-90439cfe.js","assets/vender-78ec4503.css"] : void 0));
const FullEditor = reactExports.lazy(() => __vitePreload(() => import("./FullEditor-212fc1ec.js"), true ? ["assets/FullEditor-212fc1ec.js","assets/vender-90439cfe.js","assets/vender-78ec4503.css"] : void 0));
const MockServe = reactExports.lazy(() => __vitePreload(() => import("./MockServe-75f5824c.js"), true ? ["assets/MockServe-75f5824c.js","assets/vender-90439cfe.js","assets/vender-78ec4503.css"] : void 0));
const Loading = () => {
  return /* @__PURE__ */ jsx("div", { children: "loading...." });
};
const routesRecord = [
  {
    path: "/",
    element: /* @__PURE__ */ jsx(AppLayout, {}),
    children: [
      {
        path: "",
        element: /* @__PURE__ */ jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsx(Loading, {}), children: /* @__PURE__ */ jsx(HomePage, {}) })
      }
    ]
  },
  {
    path: "/login",
    element: /* @__PURE__ */ jsx(AppLayout, {}),
    children: [
      {
        path: "",
        element: /* @__PURE__ */ jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsx(Loading, {}), children: /* @__PURE__ */ jsx(Login, {}) })
      }
    ]
  },
  {
    path: "/editor",
    element: /* @__PURE__ */ jsx(AppLayout, {}),
    children: [
      {
        path: "",
        element: /* @__PURE__ */ jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsx(Loading, {}), children: /* @__PURE__ */ jsx(FullEditor, {}) })
      }
    ]
  },
  {
    path: "/page",
    element: /* @__PURE__ */ jsx(AppLayout, {}),
    children: [
      {
        path: "",
        element: /* @__PURE__ */ jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsx(Loading, {}), children: /* @__PURE__ */ jsx("div", { children: "page" }) })
      },
      {
        path: "1",
        element: /* @__PURE__ */ jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsx(Loading, {}), children: /* @__PURE__ */ jsx(PageOne, {}) })
      },
      {
        path: "2",
        element: /* @__PURE__ */ jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsx(Loading, {}), children: /* @__PURE__ */ jsx(PageTwo, {}) })
      },
      {
        path: "3",
        element: /* @__PURE__ */ jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsx(Loading, {}), children: /* @__PURE__ */ jsx(PageThree, {}) })
      },
      {
        path: "4",
        element: /* @__PURE__ */ jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsx(Loading, {}), children: /* @__PURE__ */ jsx(PageFour, {}) })
      }
    ]
  },
  {
    path: "/opps",
    element: /* @__PURE__ */ jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsx(Loading, {}), children: /* @__PURE__ */ jsx(Oops, {}) })
  },
  {
    path: "/mock",
    element: /* @__PURE__ */ jsx(AppLayout, {}),
    children: [
      {
        path: "",
        element: /* @__PURE__ */ jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsx(Loading, {}), children: /* @__PURE__ */ jsx(MockServe, {}) })
      }
    ]
  }
];
const RootRouter = () => {
  return useRoutes(routesRecord);
};
const index = "";
const proxy = (target, key) => {
  return new Proxy(target, {
    get(target2, prop, receiver) {
      return Reflect.get(target2, prop, receiver);
    },
    set(target2, prop, value2, receiver) {
      return Reflect.set(target2, prop, value2, receiver);
    }
  });
};
const logAccess = (target, key) => {
  return proxy(target);
};
const nameProp = logAccess({
  name: "yyf",
  age: 40
});
nameProp.name = nameProp.name + "11 ";
const rootNode = document.getElementById("root");
const root = createRoot(rootNode);
root.render(
  /* @__PURE__ */ jsx(BrowserRouter, { children: /* @__PURE__ */ jsx(Provider, { store, children: /* @__PURE__ */ jsx(RootRouter, {}) }) })
);
export {
  jsx as a,
  incrementBySAnmount as b,
  changeCurrentPage as c,
  decrement as d,
  changePageSize as e,
  increment as i,
  jsxs as j
};
