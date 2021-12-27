import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import BodyInput from './core/BodyInput';
import QueryStringInput from './QueryStringInput';
import RequestHeader from './RequestHeader';

const InputData = () => {
  const [key, setKey] = useState('home');
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 mt-3"
    >
      <Tab eventKey="home" title="Query Param">
        <QueryStringInput />
      </Tab>
      <Tab eventKey="profile" title="Headers">
        <RequestHeader />
      </Tab>
      <Tab eventKey="contact" title="Body">
        <BodyInput />
      </Tab>
    </Tabs>
  )
}

export default InputData
