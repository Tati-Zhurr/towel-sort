
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arrResult=[];
  if (!matrix){
    return [];
  };
  matrix.forEach((arr, i) => {if((i%2 === 0)||(i===0)){
    arrResult.push(...arr);
  } else{ 
    arrResult.push(...arr.reverse());
  } });
  return arrResult;
}

/*console.log(towelSort([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]));*/
