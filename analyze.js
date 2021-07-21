function analyze(arr) {
  return {
    average: calculateAvg(arr),
    min: getMinValue(arr),
    max: getMax(arr),
    length: getLength(arr),
  };
}

function calculateAvg(arr) {
  const sum = arr.reduce((a, b) => a + b, 0);
  const avg = sum / arr.length || 0;

  return avg;
}

function getMinValue(arr) {
  return arr.sort()[0];
}

function getMax(arr) {
  return arr.sort()[arr.length - 1];
}

function getLength(arr) {
  return arr.length;
}
export { analyze };
