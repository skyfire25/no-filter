/******************
 * YOUR CODE HERE *
 ******************/
const onlyOdds = function(num){
const nums = [];
for (const num of nums){
if(num === 1 || num === 3){
nums.push(num)
}
}
return nums
}

const onlyEvens = function(even){
  const numz = [];
  for(const even of evens){
    if(even === 2 || even === 4){
      numz.push(even)
    }
  }
  return numz
}





/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof dNames === 'undefined') {
  dNames = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  dNames,
}
