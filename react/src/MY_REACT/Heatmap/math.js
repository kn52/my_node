const getMinAvgMax = (arr) => {
    let max = arr[0];
    let min = arr[0];
    let sum = arr[0];
  
    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i] < min) {
        min = arr[i];
      }
      sum = sum + arr[i];
    }
  
    return {
      min,
      avg: Math.trunc(sum / arr.length),
      max
    };
  };
  
  export { getMinAvgMax };
  