import Struct from '../metaprogramming/struct'

class Machine extends Struct('expression', 'environment') {
  step() {
    this.expression = this.expression.reduce(this.environment)
  }

  run(callback) {
    while (this.expression.isReducible()) {
      callback(this.expression)
      this.step()
    }
    callback(this.expression)
  }
}

export default Machine