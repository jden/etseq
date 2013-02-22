var S
var P
var Q = require('Q')
var R


function etsequitur(actiones) {
  if (!Array.isArray(actiones)) {
    actiones = Array.prototype.slice.call(arguments)
  }

  var imprimitur = actiones.shift()
  return actions.reduce(function (praetor, sequitur) {
    return praetor.then(function () {
      if (typeof sequitur === 'function') {
        return sequitur()
      }
      return sequitur
    })
  }, Q.resolve(imprimitur()))
}


module.exports = etsequitur