function hasDuplicateValue(array) {
  let steps = 0;
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      steps = steps + 1;
      if(i !== j && array[i] === array[j]) {
        return true;
      }
    }
  }

  console.log("It took " + steps + " to finish this computation");
  return false;
}

hasDuplicateValue([1, 2, 3]);
hasDuplicateValue([3, 4, 5, 6]);
