import React from "react";
import "../../../css/json-editor.css";
import { useHttpClientContext } from "../../../context";
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
const BodyInput = () => {
  const { body, setBody } = useHttpClientContext();
  return (
    <JSONInput
      id='a_unique_id'
      placeholder={body}
      locale={locale}
      width="100%"
      height="20rem"
      onChange={e => {
        console.log(e);
        setBody(e.jsObject)
      }}
      style={{ body: { fontSize: "1.25rem" } }}
    />
  );
};

export default BodyInput;