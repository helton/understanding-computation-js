// const { Number, Boolean } = require('./primitives')
// const { Add, Multiply, LessThan } = require('./operators')
// const { DoNothing } = require('./statements')
// const { Variable } = require('./misc')

//module.exports = { Number, Boolean, Add, Multiply, LessThan, Variable, DoNothing }

// module.exports = Object.assign({}, [
//   ...require('./primitives'),
//   ...require('./operators'),
//   ...require('./statements'),
//   ...require('./misc')
// ]);

const primitives = require('./primitives')
module.exports = Object.assign({}, [...primitives])