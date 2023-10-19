document.getElementById('converter-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const celsius = parseFloat(document.getElementById('celsius').value);
    const fahrenheit = (celsius * 9/5) + 32;

    if (!isNaN(fahrenheit)) {
        document.getElementById('result').textContent = `Result: ${fahrenheit.toFixed(2)} °F`;
    } else {
        document.getElementById('result').textContent = 'Result: Invalid input';
    }
});

document.getElementById('aconverter-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const marla = parseFloat(document.getElementById('marla').value);
    const squareFeet = marla * 272.25; // 1 Marla = 272.25 square feet

    if (!isNaN(squareFeet)) {
        document.getElementById('resul').textContent = `Result: ${squareFeet.toFixed(2)} square feet`;
    } else {
        document.getElementById('resul').textContent = 'Result: Invalid input';
    }
});
