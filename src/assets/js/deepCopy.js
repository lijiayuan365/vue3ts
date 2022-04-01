function deepCopy(obj) {
  if(typeof obj !== 'object'||obj===null) {
    return obj;
  }
  let result = {};
  if(obj.constructor === Array) {
    result = []
  }
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      result[key] = deepCopy(obj[key])
    }
  }
  return result;
}
// console.log(typeof null)
let obj = {name:'1',key:'2'}
let obj2 = deepCopy(obj);
obj2.name = '2'
console.log(obj)
console.log(obj2)
