/*
find the Symmetric Difference
The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. 
Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).
*/

function sym(args) {
  // Convert the arguments object into an array
  const arrays = Array.from(arguments);

  // Define a helper function to compute the symmetric difference of two arrays
  const symmetricDifference = (arr1, arr2) => {
    return arr1
      .filter((value) => !arr2.includes(value))
      .concat(arr2.filter((value) => !arr1.includes(value)));
  };

  // Use the reduce function to iterate over the arrays and compute the symmetric difference
  return arrays.reduce((accumulator, currentArray) => {
    // Compute the symmetric difference between the accumulator and the current array
    return symmetricDifference(accumulator, currentArray);
  }, []);
}

// Example arrays
const result = sym([1, 2, 3], [5, 2, 1, 4]);

// Output the result
console.log(result);//[ 3, 5, 4 ]
