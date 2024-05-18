function processArray(arr) {
    let processedArray = [];
        for (let num of arr) {
            if (num % 2 === 0) {
                processedArray.push(num ** 2); 
            } else {
                processedArray.push(num * 3);         }
        }
        return processedArray;
    }
    
    
    let inputArray = [18, 33, 26, 44];
    let outputArray =
     processArray(inputArray);
    console.log(outputArray); 

