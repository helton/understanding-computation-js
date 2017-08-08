import { Number, Boolean, Add, Multiply, LessThan, Variable, DoNothing } from './simple/simple'
import Machine from './simple/machine'
import * as consolex from './utils/consolex'

let machine = new Machine(
  new Add(
    new Multiply(new Number(1), new Number(2)), 
    new Multiply(new Number(3), new Number(4))
  ),
  {}
)
machine.run(consolex.log)


machine = new Machine(
  new LessThan(
    new Number(5), new Add(new Number(2), new Number(2))
  ),
  {}
)
machine.run(consolex.log)


machine = new Machine(
  new Add(new Variable('x'), new Variable('y')),
  { x : new Number(3), y : new Number(4) }
)
machine.run(consolex.log)