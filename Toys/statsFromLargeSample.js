/*We sampled integers between 0 and 255, and stored the results in an array count:  count[k] is the number of integers we sampled equal to k.

Return the minimum, maximum, mean, median, and mode of the sample respectively, as an array of floating point numbers.  The mode is guaranteed to be unique.

(Recall that the median of a sample is:

The middle element, if the elements of the sample were sorted and the number of elements is odd;
The average of the middle two elements, if the elements of the sample were sorted and the number of elements is even.)*/

//I= array length 256
//O= array containing, min max mean median and mode, mode is unique, median is middle element or avg of two middle elements, mode will be unique most repeated number, rounded to the 10 power of -5

var sampleStats = function(count) {
  var sum = 0;
  var sampleSize = 0;
  var min;
  var max;
  var mode = 0;
  var maxOccurrences = 0;
  for (var i = 0; i < count.length; i++) {
    let occurrences = count[i];
    if (occurrences > 0) {
      if (occurrences > maxOccurrences) {
        mode = i;
        maxOccurrences = occurrences;
      }
      if (min === undefined) {
        min = i;
      }
      max = i;
      sum += (i * occurrences);
      sampleSize += occurrences;
    }
  }
  var mean = float(sum/sampleSize);
  var sample = count.slice(min, max + 1);
  var median = float(findMedian(min, max, count, sampleSize));
  return [float(min), float(max), mean, median, float(mode)]
};

var float = function(x) {
  return Number.parseFloat(x).toFixed(5);
}
var findMedian = function(min, max, count, sampleSize) {
  var midpointLow = Math.floor(sampleSize/2);
  if (!sampleSize % 2) {
    var midpointHigh = midpointLow + 1;
  } else {
    midpointHigh = midpointLow;
  }
  var samplesCount = 0;
  var median;
  var low;
  for (var i = min; i <= max; i++) {
    let low = count[i];
    while (occurrences > 0) {
      occurrences -= 1;
      samplesCount += 1;
      if (samplesCount === midpointLow) {
        if (sampleSize % 2 || occurrences > 0) {
          return i;
        } else {
          low = i;
        }
      } if (samplesCount === midpointHigh) {
        return (low + i) / 2
      }
    }
  }
}

//  var test =
// [264,912,1416,1903,2515,3080,3598,4099,4757,5270,5748,6451,7074,7367,7847,8653,9318,9601,10481,10787,11563,11869,12278,12939,13737,13909,14621,15264,15833,16562,17135,17491,17982,18731,19127,19579,20524,20941,21347,21800,22342,21567,21063,20683,20204,19818,19351,18971,18496,17974,17677,17034,16701,16223,15671,15167,14718,14552,14061,13448,13199,12539,12265,11912,10931,10947,10516,10177,9582,9102,8699,8091,7864,7330,6915,6492,6013,5513,5140,4701,4111,3725,3321,2947,2357,1988,1535,1124,664,206,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// console.log(sampleStats(test));