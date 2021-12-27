import axios from 'axios';
export const asMap = (array = []) => {
  return array.reduce((acc, object) => {
    if (object.key && object.value) {
      return {
        ...acc, [object.key]: object.value
      }
    }
    return acc;
  }, {})
};

export const asArray = (object = {}) => {
  return Object.keys(object).map(hKey => {
    return {
      key: hKey,
      value: object[hKey]
    }
  });
}

export const getAxiosMethod = (methodName = "") => {
  methodName = methodName.toLowerCase().trim();
  if (methodName && axios[methodName]) {
    return axios[methodName];
  }
  throw new Error(`Method "${methodName}" not supported`)
}