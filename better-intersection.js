function intersection(firstArray, secondArray) {
  let result = [];

  for(let i = 0; i < firstArray.length; i++) {
    for(let j = 0; j < secondArray.length; j++) {
      if(firstArray[i] === secondArray[j]) {
        result.push(firstArray[i]);
        break;
      }
    }
  }

  return result;
}

console.log(
  intersection(["hello", "world"], [1, 2])
);

console.log(
  intersection([1, 2, 3], [1, 2])
)
