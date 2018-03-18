// Reflection

const reflect = (object) => {
  for (let prop in object) {
    if (object.hasOwnProperty(prop)) {
      console.log(prop + ': ' + object[prop])
    }
  }
}

// Optional chaining -- extended MPJ's function by calling the property if its a function.
// https://youtu.be/FKRVqtP8o48

function getOrCall(obj, ...props) {
  const val = obj[props[0]];
  if ( props.length === 1 || val === undefined ) {
    return typeof val === 'function' ? val() : val;
  }

  const rest = props.slice(1);
  return getOrCall.apply(null, [val, rest]);
}

const user2 = { name: 'Name', parent: { child: () => { return 'Yay, function was called.' }}};
const test = getOrCall(user2, 'parent', 'child')
const test2 = getOrCall(user2, 'uncle', 'child')

console.log(test) // Yay, function was called.
console.log(test2) // undefined, as there is no uncle.
