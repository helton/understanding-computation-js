import Struct from '../metaprogramming/struct'
import { objectToString } from '../utils/utils'

class Machine extends Struct('statement', 'environment') {
  step () {
    [this.statement, this.environment] = this.statement.reduce(this.environment)
  }

  run (callback) {
    while (this.statement.isReducible()) {
      this.showStep(callback)
      this.step()
    }
    this.showStep(callback)
  }

  showStep (callback) {
    callback(`> ${this.statement}\nENV: ${objectToString(this.environment)}\n`)
  }

}

export default Machine
