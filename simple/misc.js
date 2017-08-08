const Struct = require('../metaprogramming/struct')
const { InspectMixin } = require('../metaprogramming/mixins')

class Variable extends InspectMixin(Struct('name')) {
  toString() {
    return this.name
  }

  isReducible() {
    return true
  }

  reduce(environment) {
    return environment[this.name]
  }
}

module.exports = { Variable }