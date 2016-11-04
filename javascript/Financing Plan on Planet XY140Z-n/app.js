function savingsplan() {
  var arr = [2, 3, 4, 5, 6, 7, 4, 5, 6, 7, 8, 6, 7, 8, 9, 8, 9, 10, 10, 11]
  var output = 0;
  for (var i = 0; i < arr.length; i++) {
    output += arr[i]
  }
  return output
}

console.log(savingsplan());
