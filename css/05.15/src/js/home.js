



//function arr(arguments) {
//    var first = arguments[0];
//    var second = 0;
//    for (var i = 0; i < arguments.length; i++){
//        second = arguments[i];
//        if ( first >=second){
//            first = second;
//        }
//
//    }
//    return first;
//}
//
//console.log(arr([3,77,54,32,3,5,1]));


//function arr(arguments) {
//    var first = arguments[0];
//    var second = 0;
//    for (var i = 0; i < arguments.length; i++){
//        second = arguments[i];
//        if ( first < second){
//            first = second;
//        }
//
//    }
//    return first;
//}
//
//console.log(arr([3,77,54,32,3,5,1]));




//var arr = [3,77,54,32,3,5,1];
//
//function second(a) {
//    var arr2 = [];
//    for (var i = 0; i < a.length; i+=2){
//        arr2.push(a[i]);
//    }
//    return arr2;
//}
//
//console.log(second(arr));


var arr = [3,77,54,32,3,5,1];
function arry(a,b) {
    var arr2 = [];
    for (var i = 0; i < a.length; i+=b){
        arr2.push(a[i]);
    }
    return arr2;
}

console.log(arry(arr,4));