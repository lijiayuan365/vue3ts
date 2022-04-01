let date = new Date();
let a = {
  date,
  name:'1'
}
let b = a;
console.log(b.date.getFullYear())
let c= JSON.parse(JSON.stringify(a))
console.log(c.date)