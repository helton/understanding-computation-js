const Struct = (...params) => class {
  constructor(...args) {
    for (let i = 0; i < params.length; i++)
      this[params[i]] = args[i]
  }

  toString() {
    const properties = this.members()
      .map(name => `${name}: ${this[name]}`)
      .join(", ")
    return `{ ${this.constructor.name} [ ${properties} ] }`
  }

  inspect() {
    return this.toString()
  }

  toArray() {
    return this.members().map(name => this[name])
  }

  values() {
    return this.toArray()
  }

  members() {
    return params
  }

  length() {
    return this.size()
  }

  size() {
    return params.length
  }

  eachPair(fn) {
    this.members().forEach(name => fn(name, this[name]))
  }

}

module.exports = Struct