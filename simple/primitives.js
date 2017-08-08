const Struct = require('../metaprogramming/struct')
const { InspectMixin } = require('../metaprogramming/mixins')

class Primitive extends InspectMixin(Struct('value')) {
  toString() {
    return this.value
  }
  
  isReducible() {
    return false
  }
}

class Number extends Primitive {}
class Boolean extends Primitive {}

module.exports = { Number, Boolean }