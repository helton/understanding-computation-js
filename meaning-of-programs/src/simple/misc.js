import Struct from '../metaprogramming/struct'
import { InspectMixin } from '../metaprogramming/mixins'

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

export { Variable }