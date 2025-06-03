// script.js

function calculateFactorial() {
    const number = parseInt(document.getElementById('numberInput').value);
    if (number < 0) {
        document.getElementById('result').innerText = "Factorial is not defined for negative numbers.";
        return;
    }
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    document.getElementById('result').innerText = `Factorial of ${number} is ${factorial}.`;
}

function generateFibonacci() {
    const number = parseInt(document.getElementById('numberInput').value);
    if (number <= 0) {
        document.getElementById('result').innerText = "Please enter a positive number.";
        return;
    }
    let fibSeries = [0, 1];
    for (let i = 2; i < number; i++) {
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }
    document.getElementById('result').innerText = `Fibonacci series up to ${number} terms: ${fibSeries.slice(0, number).join(', ')}.`;
}

function findPrimes() {
    const number = parseInt(document.getElementById('numberInput').value);
    if (number <= 1) {
        document.getElementById('result').innerText = "Please enter a number greater than 1.";
        return;
    }
    let primes = [];
    for (let i = 2; i <= number; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.push(i);
    }
    document.getElementById('result').innerText = `Prime numbers up to ${number}: ${primes.join(', ')}.`;
}

function checkPalindrome() {
    const number = document.getElementById('numberInput').value;
    const reversed = number.split('').reverse().join('');
    if (number === reversed) {
        document.getElementById('result').innerText = `${number} is a palindrome.`;
    } else {
        document.getElementById('result').innerText = `${number} is not a palindrome.`;
    }
}