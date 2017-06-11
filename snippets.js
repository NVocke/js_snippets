// Reflection

var reflect = function(object) {
  for (var prop in object) {
    if (object.hasOwnProperty(prop)) {
      console.log(prop + ': ' + object[prop])
    }
  }
}