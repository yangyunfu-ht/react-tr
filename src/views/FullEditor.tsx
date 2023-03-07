import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { Editor, EditorState } from 'draft-js'
import 'draft-js/dist/Draft.css';

const FullEditor = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
 
  useEffect(() => {
    // console.log(editorState)
  }, [editorState])

  return (
    // <div>
    //   <h2 style={{ color: 'pink' }}>富文本编辑器</h2>
      <Editor editorState={editorState} onChange={setEditorState}></Editor>
    // </div>
  )
}

export default FullEditor