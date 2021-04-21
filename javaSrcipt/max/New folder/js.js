// define method

MaxNumber = () => {
    var numberA = document.getElementById('number-a').value;
    var numberB = document.getElementById('number-b').value;
    // debug: console.log('i'm here'!!)

    if (parseInt(numberA) > parseInt(numberB)) {
      document.getElementById('max-number').value = numberA;
    } else {
      document.getElementById('max-number').value = numberB;
    }
  }