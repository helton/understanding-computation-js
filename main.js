const { Number, Boolean, Add, Multiply, LessThan, Variable, DoNothing } = require('./simple/simple')
const Machine = require('./simple/machine')
const consolex = require('./utils/consolex')

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