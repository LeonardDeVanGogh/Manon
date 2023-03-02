let originalArray = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let indexStart = 5;
let indexEnd = 6;

function calc(array, n1, n2){

    let i;
    let result = 0;
    for(i=n1-1;i<n2;i++){
        result += array[i];
    }

    return console.log(result);
}

calc(originalArray, indexStart, indexEnd);