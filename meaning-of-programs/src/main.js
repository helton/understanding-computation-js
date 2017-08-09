import * as Simple from './simple/simple'
import Machine from './simple/machine'
import * as consolex from './utils/consolex'

// new Machine(
//   new Simple.Assign(
//     'x',
//     new Simple.Add(
//       new Simple.Variable('x'),
//       new Simple.Number(1)
//     )
//   ),
//   { 'x': new Simple.Number(2) }
// ).run(consolex.log)

// new Machine(
//   new Simple.If(
//     new Simple.Variable('x'),
//     new Simple.Assign(
//       new Simple.Variable('y'),
//       new Simple.Number(1)
//     ),
//     new Simple.DoNothing()
//   ),
//   {
//     'x': new Simple.Boolean(false)
//   }
// ).run(consolex.log)

// new Machine(
//   new Simple.Sequence(
//     new Simple.Assign(
//       'x',
//       new Simple.Add(
//         new Simple.Number(1),
//         new Simple.Number(1)
//       )
//     ),
//     new Simple.Assign(
//       'y',
//       new Simple.Add(
//         new Simple.Variable('x'),
//         new Simple.Number(3)
//       )
//     )
//   )
//   , {}
// ).run(consolex.log)

new Machine(
  new Simple.While(
    new Simple.LessThan(
      new Simple.Variable('x'),
      new Simple.Number(5),
    ),
    new Simple.Assign(
      'x',
      new Simple.Add(
        new Simple.Variable('x'),
        new Simple.Number(1)
      )
    )
  )
  ,
  { 
    'x': new Simple.Number(0)
  }
).run(consolex.log)