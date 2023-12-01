function cloneObject(obj) {
    return Object.assign({}, obj);
  }
  function cloneObject(obj) {
    return { ...obj };
  }
  const originalObject = { key1: 'value1', key2: 'value2' };
  const clonedObject1 = cloneObject(originalObject);
  console.log(clonedObject1);
  const clonedObject2 = cloneObject(originalObject);
  console.log(clonedObject2);
  