import { a as jsx } from "./index-110c2d0a.js";
import { r as reactExports, D as Draft } from "./vender-90439cfe.js";
const FullEditor = () => {
  const [editorState, setEditorState] = reactExports.useState(() => Draft.EditorState.createEmpty());
  reactExports.useEffect(() => {
  }, [editorState]);
  return (
    // <div>
    //   <h2 style={{ color: 'pink' }}>富文本编辑器</h2>
    /* @__PURE__ */ jsx(Draft.Editor, { editorState, onChange: setEditorState })
  );
};
export {
  FullEditor as default
};
