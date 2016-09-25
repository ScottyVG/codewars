equenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if (count === 0) {
      return '0=0';
    } else if (count < 0) {
      return `${count}<0`
    } else {
      var total = 0;
      var stringTotal = "0";
      for (var i = 1; i <= count; i++) {
        total += i;
        stringTotal = stringTotal + `+${i}`
      }
      return stringTotal + " = " + total;
    }
  };
  return SequenceSum;
})();
