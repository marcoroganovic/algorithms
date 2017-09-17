function hasDuplicateValue(array) {
  let steps = 0;
  let existingNumbers = [];

  for(let i = 0; i < array.length; i++) {
    steps = steps + 1;
    if(existingNumbers[array[i]] === undefined) {
      existingNumbers[array[i]] = 1;
    } else {
      return true;
    }
  }

  console.log("It took " + steps + " to finish this computation");
  return false;
}

hasDuplicateValue([1, 2, 3]);
hasDuplicateValue([3, 4, 5, 6, 7, 8]);
