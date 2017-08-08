import Struct from '../metaprogramming/struct'
import { InspectMixin } from '../metaprogramming/mixins'

class DoNothing extends InspectMixin(Struct('value')) {
  toString() {
    return this.value
  }
  
  isReducible() {
    return false
  }
}

export { DoNothing }