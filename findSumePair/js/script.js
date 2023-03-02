let originalData = [1, 2, 3, 4, 5, 6, 7, 8, 9,10 ,11, 12];
let originK = 13;

function findSumPair(numbers, k){

    let masterArray = [];
    let i;

    for(i=0;i<numbers.length;i++){
        let j;
        for(j=0;j<numbers.length;j++){
            if(numbers[i]+numbers[j]===k){
                let slaveArray = [];
                if(numbers[i]>numbers[j]){
                    slaveArray.push(numbers[j], numbers[i]);
                }else{
                    slaveArray.push(numbers[i], numbers[j]);
                }
                numbers.splice(numbers[j]-1);
                masterArray.push(slaveArray);
            }
        }
    }

    return console.log(masterArray);
}

findSumPair(originalData, originK);