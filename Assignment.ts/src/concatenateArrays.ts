{
// Problem 3

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.flat();
  };
  
  // Given Example usage:
  console.log(concatenateArrays(["a", "b"], ["c"]));       // Output: ["a", "b", "c"]
  console.log(concatenateArrays([1, 2], [3, 4], [5]));


}