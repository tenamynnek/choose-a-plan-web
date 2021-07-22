const mergeDeep = (...args) => {
  const target = {}
  // Merge the object into the target object
  const merger = (obj) => {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        if (Object.prototype.toString.call(obj[prop]) === '[object Object]') {
          // If we're doing a deep merge
          // and the property is an object
          target[prop] = mergeDeep(target[prop], obj[prop])
        } else {
          // Otherwise, do a regular merge
          target[prop] = obj[prop]
        }
      }
    }
  }
  // Loop through each object and conduct a merge
  for (let i = 0; i < args.length; i++) {
    merger(args[i])
  }
  return target
}

module.exports = mergeDeep
