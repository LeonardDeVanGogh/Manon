let originalArray = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

function average(array){

    let myAverage;

    if(array.length===0){
        myAverage = 0;
    } else{

        let myAverageTotal = 0;
        let i;
        for(i=0;i<array.length;i++){
            myAverageTotal += array[i];
        }
        myAverage = myAverageTotal / array.length;

    }

    return console.log(myAverage);
}

average(originalArray);