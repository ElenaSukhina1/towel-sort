
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let x = []
  if (matrix === undefined) {

    return x;
  } else {
    matrix.forEach((value, index) => {
      if (index % 2 !== 0) {
        let revArr = value.reverse();
        return x.push(revArr)
      } else
        x.push(value)
    })
  }
  return x.flat();
}
