const quickSort = arr => {
  if(arr.length < 2) {
    return arr;
  } else {
    const pivot = arr[0];
    const rest = arr.slice(1);
    const smaller = rest.filter(el => el < pivot); 
    const greater = rest.filter(el => el > pivot);
    
    return [...quickSort(smaller), pivot, ...quickSort(greater)];
  }
}


console.log(quickSort([1323, 3231342, 3213213212, 3232, 33]));
console.log(quickSort([1, 5, 3, 6, 9]));
