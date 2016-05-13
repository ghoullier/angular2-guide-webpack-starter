const path = require('path')
const root = path.resolve(__dirname, '..')
module.exports.root = (...args) => {
  return path.join(...[root, ...args]);
}
