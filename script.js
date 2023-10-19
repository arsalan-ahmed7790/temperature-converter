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
