function changeMethod() {
    var a = parseInt( document.getElementById('num-a').value);
    var b = parseInt( document.getElementById('num-b').value);
    var c = parseInt( document.getElementById('num-c').value);
    var result = 0;

    if (a == 0) {
    result = -c/b;
    } else{
        delta =  (b*b - 4*a*c) ;
        switch (true) {
            case delta < 0: 
                result = "PTVN"
                break;
            case delta == 0:
                result = "PT có hai nghiệm x1=x2 =" + (- b/2*a)
                break;
            case delta > 0: 
                var x1 = (-b + Math.sqrt(delta))  /2*a
                var x2 = (-b - Math.sqrt(delta))  /2*a
                result = `phương trình có hai nghiệm x1=${x1}, x2=${x2}`
                break;
        }
    }
    document.getElementById('result-id').value = result;
    
}