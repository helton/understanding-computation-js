const Struct = require('../metaprogramming/struct')
const { InspectMixin } = require('../metaprogramming/mixins')

class DoNothing extends InspectMixin(Struct('value')) {
  toString() {
    return this.value
  }
  
  isReducible() {
    return false
  }
}

module.exports = { DoNothing }