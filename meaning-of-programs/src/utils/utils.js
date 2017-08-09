const objectToString = object => {
  const properties = Object.getOwnPropertyNames(object)
    .map(name => `${name} => ${object[name]}`)
    .join(', ')
  return `{ ${properties} }`
}

export { objectToString }
