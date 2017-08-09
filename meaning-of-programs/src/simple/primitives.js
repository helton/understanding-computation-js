import Struct from '../metaprogramming/struct'
import { InspectMixin } from '../metaprogramming/mixins'

class Primitive extends InspectMixin(Struct('value')) {
  toString () {
    return this.value
  }

  isReducible () {
    return false
  }
}

class Number extends Primitive {}
class Boolean extends Primitive {
  static areSame(left, right) {
    return left.value === right.value
  }

  static isTrue(otherBoolean) {
    return this.areSame(new Boolean(true), otherBoolean)
  }

  static isFalse(otherBoolean) {
    return !this.isTrue(otherBoolean)
  }
}

export { Number, Boolean }
