const gril = {
  name:'xx',
  age:12,
  careet:'aa',
  avatar:'333',
  phone:12344,
}
const baseInfo = ['name','age'];
const praviteInfo = ['avatar','phone'];
const user = {
  isValidated:true,
  isVIP:true,
}
const intermediary = new Proxy(gril,{
  get:function(gril,key) {
    // console.log('get')
    if(!user.isValidated) {
      return console.log('no')
    } else if(!user.isVIP&&praviteInfo.includes(key)) {
      return console.log('VIP')
    } else {
      return gril[key];
    }
  }
})
console.log(intermediary.avatar)