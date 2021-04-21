checkNumbers = () => {
    let listNumbers = document.getElementById('input-1').value.trim();
    if (listNumbers == '' ) {
        alert('Please enter the number');
        return
      }  
    //convert arr
    let str = listNumbers.split(' ')
    let num = []
    // console.log(typeof(listNumbers));
  for (var i = 0; i < str.length; i++) {
      num[i]= parseInt(str[i])
    }
//  console.log(num)
//     let max = num[0]
//    for ( var i = 0; i < num.length; i++){
//        if (num[i] > max){
//            max = num[i]
//        }
//    }
 
    listNumbers.sort(function(a, b){return a - b});
    
 document.getElementById("result-1").innerText = num ;
}