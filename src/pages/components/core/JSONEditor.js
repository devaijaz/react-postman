import React from "react";
import "../../../css/json-editor.css";
import { Controlled as CodeEditor } from "react-codemirror2";
require("codemirror/mode/javascript/javascript");

const JSONEditor = ({ value = "" }) => {
  return (
    <CodeEditor
      value={value}
      className="codemirror-wrapper"
      options={{
        readOnly: true,
        mode: "javascript",
        theme: "material",
        lineNumbers: true,
        lineWrapping: true,
      }}
    />
  );
};

export default JSONEditor;