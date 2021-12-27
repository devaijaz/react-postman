import React, { useState } from "react";
import { nanoid } from "nanoid";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
const Table = () => {
  const [rows, setRows] = useState([]);
  const getRowData = () => {
    return {
      id: nanoid(),
      key: "",
      value: "",
    };
  };
  const rowAddHandler = () => {
    console.log(rows);
    setRows([...rows, getRowData()]);
  };

  const update = (rowId, prop, event) => {
    const newRows = [...rows];
    const foundRow = newRows.find((row) => row.id === rowId);
    foundRow[prop] = event.target.value;
    setRows((old) => newRows);
  };

  const remove = (rowId) => {
    setRows((previousState) => previousState.filter((r) => r.id !== rowId));
  };

  return (
    <>
      <h1> Table Example</h1>
      <button onClick={rowAddHandler}>Add Row</button>
      <TableInner rows={rows} update={update} remove={remove} />
    </>
  );
};

const TableInner = ({ rows = [], update, remove }) => {
  return (
    <div>
      {rows.map((data) => {
        return (
          <div key={data.id}>
            <InputGroup className="mb-3">
              <FormControl
                value={data.key}
                placeholder="Key"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={update.bind(this, data.id, "key")}
              />
              <FormControl
                placeholder="Value"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={update.bind(this, data.id, "value")}
                value={data.value}
              />
              <Button variant="outline" onClick={() => remove.bind(this, data.id)}>
                <FaTrash color="red" />
              </Button>
            </InputGroup>
          </div>
        );
      })}
    </div>
  );
};

export default Table;
