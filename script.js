document.getElementById('convert').addEventListener('click', function() {
    const temperatureInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    const resultDiv = document.getElementById('result');
    
    // Validate the input
    if (isNaN(temperatureInput) || temperatureInput === '') {
        resultDiv.textContent = 'Please enter a valid number!';
        return;
    }
    
    const temperature = parseFloat(temperatureInput);
    let convertedTemperature;
    let convertedUnit;

    switch (unit) {
        case 'Celsius':
            convertedTemperature = (temperature * 9/5) + 32;
            convertedUnit = 'Fahrenheit';
            resultDiv.textContent = `${temperature} Celsius is equal to ${convertedTemperature.toFixed(2)} Fahrenheit.`;
            break;
        case 'Fahrenheit':
            convertedTemperature = (temperature - 32) * 5/9;
            convertedUnit = 'Celsius';
            resultDiv.textContent = `${temperature} Fahrenheit is equal to ${convertedTemperature.toFixed(2)} Celsius.`;
            break;
        case 'Kelvin':
            convertedTemperature = temperature - 273.15;
            convertedUnit = 'Celsius';
            resultDiv.textContent = `${temperature} Kelvin is equal to ${convertedTemperature.toFixed(2)} Celsius.`;
            convertedTemperature = temperature * 9/5 - 459.67;
            resultDiv.textContent += ` or ${convertedTemperature.toFixed(2)} Fahrenheit.`;
            break;
        default:
            resultDiv.textContent = 'Invalid unit selected!';
            break;
    }
});
