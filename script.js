
    function appendToDisplay(value) {
        document.getElementById('display').value += value;
}

    function clearDisplay() {
        document.getElementById('display').value = '';
}

    function calculate() {
        let expression = document.getElementById('display').value;
    let result;
    try {
        result = eval(expression);
    } catch (error) {
        result = 'Error';
    }
    document.getElementById('display').value = result;
}

    function handleKey(event) {
    const key = event.key;
    if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    }
}
