function equality(myVar){
    if(myVar === '20'){
        return "Strict equality.";
    }
    else if(myVar == '20'){
        return "Equal.";
    }
    else{
        return "Neither equal Nor strictly equal.";
    }
}
console.log(equality(20));
console.log(equality("20"));
console.log(equality(20.1));