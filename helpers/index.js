// helpers list
const mergeObject = function (base, extra) {
  if (extra && typeof extra === 'object') {
    Object.assign(base, extra)
  }

  return base
}

const cloneObject = (data) => {
  return JSON.parse(JSON.stringify(data))
}

export {
  mergeObject,
  cloneObject
}
