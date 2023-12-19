/*
find the Symmetric Difference
The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. 
Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).
*/

// Define a function named symmetricDifference
function symmetricDifference() {
  // Convert the arguments object into an array
  const arrays = Array.from(arguments);

  // Use the reduce function to iterate over the arrays and compute the symmetric difference
  return arrays.reduce((accumulator, currentArray) => {
    // Filter out values that are already in the accumulator from the current array
    const valuesToAdd = currentArray.filter((value) => !accumulator.includes(value));

    // Combine the unique values from the current array and the existing accumulator
    return [
      ...accumulator.filter((value) => !currentArray.includes(value)),
      ...valuesToAdd,
    ];
  }, []);
}

// Example arrays A, B, and C
const A = [1, 2, 3];
const B = [2, 3, 4];
const C = [2, 3];

// Call the symmetricDifference function with arrays A, B, and C
const result = symmetricDifference(A, B, C);

// Output the result
console.log(result);//[ 1, 4, 2, 3 ]
