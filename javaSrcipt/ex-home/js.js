function factorial(){
    var numberA= parseInt( document.getElementById('number-one').value);
    var result = 1;
    for (var i = 1; i <= numberA ; i++){
        result *= i;
    }
    console.log('>>> result: ', result);
    console.log(result);
    document.getElementById('result-id').value = result;
}