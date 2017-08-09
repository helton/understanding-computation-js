import Struct from '../metaprogramming/struct'
import { InspectMixin } from '../metaprogramming/mixins'
import { Boolean } from './primitives'

class DoNothing extends InspectMixin(Struct()) {
  toString () {
    return 'do-nothing'
  }

  isReducible () {
    return false
  }
}

class Assign extends InspectMixin(Struct('name', 'expression')) {
  toString () {
    return `${this.name} = ${this.expression}`
  }

  isReducible () {
    return true
  }

  reduce (environment) {
    if (this.expression.isReducible()) {
      return [new Assign(this.name, this.expression.reduce(environment)), environment]
    } else {
      return [new DoNothing(), Object.assign(environment, {[this.name]: this.expression})]
    }
  }
}

class If extends InspectMixin(Struct('condition', 'consequence', 'alternative')) {
  toString () {
    return `if (${this.condition}) { ${this.consequence} } else { ${this.alternative} }`
  }

  isReducible () {
    return true
  }

  reduce (environment) {
    if (this.condition.isReducible()) {
      return [new If(this.condition.reduce(environment), this.consequence, this.alternative), environment]
    } else {
      if (Boolean.isTrue(this.condition)) {
        return [this.consequence, environment]
      } else {
        return [this.alternative, environment]
      }
    }
  }
}

class Sequence extends InspectMixin(Struct('first', 'second')) {
  toString() {
    return `${this.first}; ${this.second}`
  }

  isReducible() {
    return true
  }

  reduce(environment) {
    if (this.first instanceof DoNothing) {
      return [this.second, environment]
    } else {
      const [reducedFirst, reducedEnvironment] = this.first.reduce(environment)
      return [new Sequence(reducedFirst, this.second), reducedEnvironment]
    }
  }
}

class While extends InspectMixin(Struct('condition', 'body')) {
  toString() {
    return `while (${this.condition}) { ${this.body} }`
  }

  isReducible() {
    return true
  }

  reduce(environment) {
    return [new If(this.condition, new Sequence(this.body, this), new DoNothing, environment), environment]
  }
}

export { DoNothing, Assign, If, Sequence, While }
