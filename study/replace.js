let obj = {
  name:'ff',
  age:'1',
  friend:{
    name:'friem',
    dog:{
      name:'ggg'
    }
  }
}
let title = 'hello {name} {age}/ {friend.dog.name}'
let reg = /\{([^\}^\{]+)\}/
while(reg.test(title)) {
  let $1 = RegExp.$1;
  console.log($1)
  $1 = $1.split('.')
  let data = obj
  while($1.length) {
    data = data[$1.shift()]
  }
  title = title.replace(reg,data)
}

// title path 解决了
console.log(title)