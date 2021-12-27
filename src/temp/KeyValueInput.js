import React, { useEffect, useRef, useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { FaTrash as TrashIcon, FaPlus as AddIcon } from 'react-icons/fa';
const KeyValueInput = ({ update }) => {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState({});
  useEffect(() => {
    const map = {};
    for (let rowId in value) {
      const pair = value[rowId];
      if (pair.key) {
        if (map.hasOwnProperty(pair.key)) {
          const oldValue = map[pair.key];
          const newValue = pair.value;
          if (newValue) {
            map[pair.key] = oldValue + "," + newValue;
          }
        } else {
          map[pair.key] = pair.value;
        }
      }
    }
    update(map);
  }, [value, update]);

  const addRowHandler = () => {
    const newItem = {
      id: Math.floor(Math.random() * 1000 + 100),
    };
    setItems(function (previousState) {
      return [...previousState, newItem];
    });
  };

  const removeRowHandler = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems((_) => newItems);
    setValue(oldState => {
      if (oldState[id]) {
        const newValue = { ...oldState };
        delete newValue[id];
        return newValue;
      }
      return oldState;
    })
  };

  const updateParams = (pair) => {
    setValue(oldState => {
      return { ...oldState, [pair.id]: pair };
    })
  }


  return (
    <div>
      {items.map((item) => {
        return <KeyValueRow remove={removeRowHandler} key={item.id} itemKey={item.id} updateParams={updateParams} />;
      })}
      <Button onClick={addRowHandler}><AddIcon /></Button>
    </div>
  );
};

export default KeyValueInput;

const KeyValueRow = ({ remove, itemKey, updateParams }) => {
  const keyField = useRef(null);
  const valueField = useRef(null);

  const onKeyChange = (e) => {
    const keyProvided = keyField.current.value.trim();
    updateParams({
      id: itemKey,
      key: keyProvided,
      value: valueField.current.value.trim()
    })
  };
  const onValueChange = (e) => {
    const keyProvided = keyField.current.value.trim();
    if (keyProvided) {
      updateParams({
        id: itemKey,
        key: keyProvided,
        value: e.target.value
      })
    }
  };

  return (
    <div className="">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Key"
          aria-label="Username"
          aria-describedby="basic-addon1"
          ref={keyField}
          onChange={onKeyChange}
        />
        <FormControl
          placeholder="Value"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={onValueChange}
          ref={valueField}
        />
        <Button variant="outline" onClick={() => remove(itemKey)}><TrashIcon color="red" /></Button>
      </InputGroup>
    </div>
  );
};
