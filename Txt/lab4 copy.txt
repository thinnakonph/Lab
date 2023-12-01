function Restricted(inputString) {
    const lowerCaseInput = inputString.toLowerCase();
    if ( lowerCaseInput.includes('xxx') || lowerCaseInput.includes('sex') ||lowerCaseInput.includes('porn')) {
        return true;
    }
    return false;
}
const inputText = prompt("ใส่ข้อความ");
const result = containsRestrictedWords(inputText);
console.log(result);
