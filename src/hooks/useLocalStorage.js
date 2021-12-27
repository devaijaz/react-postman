

import { useEffect, useState } from 'react'

const useLocalStorage = (key, initialValue) => {
  const storageKey = `htclient-${key}`;
  const [value, setValue] = useState(function () {
    let dataFound = localStorage.getItem(storageKey);
    if (dataFound) {
      return JSON.parse(dataFound);
    }
    if (typeof initialValue === "function") {
      return initialValue();
    }
    return initialValue;
  });

  useEffect(function () {
    if (value) {
      localStorage.setItem(storageKey, JSON.stringify(value));
    }
  }, [storageKey, value]);

  return [value, setValue];

}

export default useLocalStorage
