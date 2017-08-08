import Struct from '../metaprogramming/struct'
import { InspectMixin } from '../metaprogramming/mixins'

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

export { Number, Boolean }