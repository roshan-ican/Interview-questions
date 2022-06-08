// countUniqueValues
// Implementafunction called countUniqueValues,
//  which acceptsasorted array,and counts the
// unique values in the array.There can be negative
// numbers in the array,but it will always be sorted.
//                 COPY count UniqueValues([1,1,1,1,1,2])//,2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])//7
//      ([])//0countUniqueValues
// countUnique Values([-2,-1,-1,0,1])//4
function countUnique(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
console.log(countUnique([1, 1, , 2, 3, 4, 5, 6, 3, 5]));
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])//7
console.log(countUnique([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
