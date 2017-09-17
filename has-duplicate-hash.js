function hasDuplicateValue(array) {
  let existingValues = {};

  for(let i = 0; i < array.length; i++) {
    if(existingValues[array[i]] === undefined) {
      existingValues[array[i]] = 1;
    } else {
      return true;
    }
  }

  return false;
}
