/**
 * 
 */
let map = new Map();
map.set({},'1');
map.set({},'2');
map.set({},'3');
map.set('key','1')
map.set('key','2')
for(let item of map) {
  console.log(item)
}