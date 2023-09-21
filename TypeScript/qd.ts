function removeNonPrintable(inputString:string){
    const regex=/[\x00-\x1F\x7F]+/g;
    const clearString=inputString.replace(regex,"");
    return clearString;
}

const inputString="Hello,\x0AWorld!\x08\x1F";
const clearString=removeNonPrintable(inputString);
console.log(clearString);