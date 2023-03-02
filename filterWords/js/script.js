let originalWords = ["Lorem", "ipsum", "dolor", "sit", "amet"];
let originalLetters = "ae";


function filterWords(words,letters){

    let filteredArray = [];
    let lettersArray = letters.split('');
    let i;

    for(i=0;i<words.length;i++){
        let j;
        for(j=0;j<lettersArray.length;j++){
            if(words[i].includes(lettersArray[j])){
                filteredArray.push(words[i]);
                break;
            }
        }

    }

    return console.log(filteredArray);
}

filterWords(originalWords, originalLetters);