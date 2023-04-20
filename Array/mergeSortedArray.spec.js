const { mergeSortedArrays }  = require('./mergeSortedArray');

describe('Merge Sorted Array test', () => {
  test('should merge two sorted array', () => {
    const arr1 = [1, 3, 5, 7, 9];
    const arr2 = [2, 4, 6, 8, 10];
    const result = mergeSortedArrays(arr1, arr2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  })

  it('should return the second array if the first array is empty', () => {
    const arr1 = [];
    const arr2 = [2, 4, 6, 8, 10];
    const result = mergeSortedArrays(arr1, arr2);
    expect(result).toEqual([2, 4, 6, 8, 10]);
  })

  it('should return the first array if the second array is empty', () => {
    const arr1 = [1, 3, 5, 7, 9];
    const arr2 = [];
    const result = mergeSortedArrays(arr1, arr2);
    expect(result).toEqual([1, 3, 5, 7, 9]);
  })

  it('should return an empty array if both arrays are empty', () => {
    const arr1 = [];
    const arr2 = [];
    const result = mergeSortedArrays(arr1, arr2);
    expect(result).toEqual([]);
  })

  it('should sort the array if array 2 is not same size', () => {
    const arr1 = [0, 3, 4, 31];
    const arr2 = [4, 6, 30];
    const result = mergeSortedArrays(arr1, arr2);
    expect(result).toEqual([0,3,4,6,30,31]);
  })

  it('should sort the array if array 1 is not same size', () => {
    const arr1 = [0, 3, 4];
    const arr2 = [4, 6, 30, 31];
    const result = mergeSortedArrays(arr1, arr2);
    expect(result).toEqual([0,3,4,6,30,31]);
  })
});