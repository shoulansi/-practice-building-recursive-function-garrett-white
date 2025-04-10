function reverseString(string){
    if (string.length <= 1){
        console.log(string);
        return string;
    } else{
        console.log(string);
        let reverseFunc = reverseString(string.slice(0,-1));
        console.log(reverseFunc);
        return string.slice(-1) + reverseFunc;
    }
}

console.log(reverseString("Hello"));
console.log(reverseString("This String is Backwards!"));
console.log(reverseString("My Name Is Garrett."));
console.log(reverseString("This is a little confusing to me."));
