
import React, { useContext } from 'react'
import useLocalStorage from './hooks/useLocalStorage';

const TEST_URL = 'https://jsonplaceholder.typicode.com/comments';

const HttpClientContext = React.createContext({
  header: {},
  queryString: {},
  body: "",
  setHeader: () => { },
  setQueryString: () => { },
  setBody: () => { },
  method: "get",
  setMethod: () => { },
  url: "",
  setUrl: () => { }
});

const HttpClientDataProvider = ({ children }) => {
  const [method, setMethod] = useLocalStorage("method", "GET");
  const [url, setUrl] = useLocalStorage("url", TEST_URL);
  const [header, setHeader] = useLocalStorage("reqheader", {});
  const [queryString, setQueryString] = useLocalStorage("qs", {});
  const [body, setBody] = useLocalStorage("reqbody", null);
  return (
    <HttpClientContext.Provider value={{
      header, setHeader, queryString, setQueryString, body, setBody, url, setUrl, method, setMethod
    }}>
      {children}
    </HttpClientContext.Provider>
  )
}

export const useHttpClientContext = () => useContext(HttpClientContext);

export default HttpClientDataProvider
