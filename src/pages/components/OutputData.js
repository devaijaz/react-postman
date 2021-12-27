import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import JSONEditor from './core/JSONEditor';
import KeyValuePair from './core/KeyValuePair';

const OutputData = ({ results }) => {
  const [key, setKey] = useState('result');
  return (
    <Tabs
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 mt-3"
    >
      <Tab eventKey="result" title="Result">
        <JSONEditor value={results.value} />
      </Tab>
      <Tab eventKey="responseHeaders" title="Response Headers">
        <h5>General Info</h5>
        <KeyValuePair pairs={results.generalInfo} />
        <h5>Response Headers</h5>
        <KeyValuePair pairs={results.responseHeaders} />
      </Tab>
      <Tab eventKey="requestHeaders" title="Request Headers">
        <KeyValuePair pairs={results.requestHeaders} />
      </Tab>
    </Tabs>
  )
}

export default OutputData
