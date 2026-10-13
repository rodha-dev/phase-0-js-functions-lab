
function calculateTax(amount){
let taxvalue = amount * 0.1
return  taxvalue;



}
function convertToUpperCase (text){
    let UpperCase = text.toUppercase()
    return UpperCase;



}
function findMaximum(num1 , num2 ){
    if(num1 > num2){
        console.log(num1) 
    }
    else {
        console.log(num2)
    }
}
function isPalindrome(word){
    return word === word.split("").reverse().join("");
    
}

function calculateDiscountedPrice(price, discount) {
    let discountAmount = price * (discount/100)
    let finalprice = price -discountAmount;
    return finalprice

}

console,log(calculateTax(1000, 10));
console,log(convertToUpperCase("hello"));
console,log(FindMaximum(10,25));
console.log(isPalindrome("madam"));
console.log(calculateDiscountedPrice(1000,20));







































// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };