import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import { useHttpClientContext } from '../../context';
import BodyInput from './core/BodyInput';
import KeyValueInput from './core/KeyValueInput';

const InputData = () => {
  const { setHeader, setQueryString, queryString } = useHttpClientContext();
  const [key, setKey] = useState('home');
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 mt-3"
    >
      <Tab eventKey="home" title="Query Param">
        <KeyValueInput update={setQueryString} />
      </Tab>
      <Tab eventKey="profile" title="Headers">
        <KeyValueInput update={setHeader} />
      </Tab>
      <Tab eventKey="contact" title="Body">
        <BodyInput />
      </Tab>
    </Tabs>
  )
}

export default InputData
