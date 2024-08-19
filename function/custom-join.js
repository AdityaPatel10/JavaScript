function customJoin(arr){
    let bag = ""
    for(let i = 0; i < arr.length; i++){
        if(i == arr.length-1){
            bag = bag + arr[i]
            break;
        }
        else{
            bag = bag + arr[i] + ","
        }
    }
    return bag;
}

let arr = ['A', 'D', 'I', 'T', 'Y', 'A']

console.log(customJoin(arr)) // Outputs: 1,2,3,4,5