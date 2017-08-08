const Struct = require('../metaprogramming/struct')
const { InspectMixin } = require('../metaprogramming/mixins')
const { Number, Boolean } = require('./primitives')

class Add extends InspectMixin(Struct('left', 'right')) {
  toString() {
    return `${this.left} + ${this.right}`
  }

  isReducible() {
    return true
  }

  reduce(environment) {
    if (this.left.isReducible())
      return new Add(this.left.reduce(environment), this.right)
    else if (this.right.isReducible())
      return new Add(this.left, this.right.reduce(environment))
    else
      return new Number(this.left + this.right)
  }
}

class Multiply extends InspectMixin(Struct('left', 'right')) {
  toString() {
    return `${this.left} * ${this.right}`
  }

  isReducible() {
    return true
  }

  reduce(environment) {
    if (this.left.isReducible())
      return new Multiply(this.left.reduce(environment), this.right)
    else if (this.right.isReducible())
      return new Multiply(this.left, this.right.reduce(environment))
    else
      return new Number(this.left * this.right)
  }
}

class LessThan extends InspectMixin(Struct('left', 'right')) {
  toString() {
    return `${this.left} < ${this.right}`
  }

  isReducible() {
    return true
  }

  reduce(environment) {
    if (this.left.isReducible())
      return new LessThan(this.left.reduce(environment), this.right)
    else if (this.right.isReducible())
      return new LessThan(this.left, this.right.reduce(environment))
    else
      return new Boolean(this.left < this.right)
  }

}

module.exports = { Add, Multiply, LessThan }