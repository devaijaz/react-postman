import React, { memo, useState } from 'react'
import { Container, Row, Form, Col, Button, FloatingLabel, Card, Alert } from 'react-bootstrap';
import { useHttpClientContext } from '../context';
import InputData from './components/InputData';
import OutputData from './components/OutputData';

import { METHODS } from './constants';
import { asArray, asMap, getAxiosMethod } from '../utils';

const defaultValue = {
  generalInfo: [],
  responseHeaders: [],
  requestHeaders: [],
  value: "",
  error: "",
  loading: false
}

const Home = () => {
  const { url, method, header, queryString, body } = useHttpClientContext();
  const [results, setResults] = useState(defaultValue);
  const handler = async () => {
    setResults({ ...defaultValue, loading: true });
    let newResult = { ...defaultValue };
    try {
      new URL(url)
      const response = await getAxiosMethod(method)(url, {
        headers: {
          "Content-Type": "application/json", ...asMap(header)
        },
        params: asMap(queryString),
        data: ["post", "put", "patch"].includes(method) ? JSON.stringify(body) : null
      });
      const responseHeaders = asArray(response.headers);
      const requestHeaders = asArray(response.config.headers);
      const generalInfo = asArray({
        url: response.request.responseURL,
        method: response.config.method,
        status: response.status
      });
      newResult = { ...newResult, responseHeaders, requestHeaders, generalInfo };
      const data = response.data;
      newResult = { ...newResult, value: JSON.stringify(data, null, 2), loading: false };
      setResults(function (_) {
        return newResult
      });
    } catch (e) {
      setResults((o) => { return { ...o, error: e.message, loading: false } });
    }
  }

  return (
    <>
      <Container>
        {results.error && <Alert variant="danger">
          {results.error}
        </Alert>}
        <Card>
          <Card.Body>
            <HEADER submit={handler} />
          </Card.Body>
        </Card>
        <Card className="mt-2">
          <Card.Body>
            <InputData />
          </Card.Body>
        </Card>
        <Card className="mt-4">
          <Card.Body>
            <OutputData results={results} />
          </Card.Body>
        </Card>

      </Container >
    </>
  )
}

const HEADER = memo(({ submit }) => {
  const { setUrl, url, method, setMethod } = useHttpClientContext();
  return <Row className="g-0">
    <Col style={{ "flex": "1" }}>
      <FloatingLabel controlId="floatingSelectGrid" label="Method">
        <Form.Select aria-label="Floating label select example" value={method} onChange={e => setMethod(e.target.value)}>
          {METHODS.map(m => {
            return <option key={m.value} value={m.value}>{m.text}</option>
          })}
        </Form.Select>
      </FloatingLabel>
    </Col>
    <Col style={{ "flex": "8" }}>
      <FloatingLabel label="URL">
        <Form.Control type="text" placeholder="http://host:port/uri" value={url} onChange={e => setUrl(e.target.value)} />
      </FloatingLabel>
    </Col>
    <Col style={{ "flex": "1" }}>
      <Button variant='secondary' size="lg" onClick={submit}>SUBMIT</Button>
    </Col>
  </Row>
})

export default Home;
