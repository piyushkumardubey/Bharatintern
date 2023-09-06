function convertTemperature(value, unit) {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");

    if (unit === "celsius") {
        const fahrenheitValue = (parseFloat(value) * 9/5) + 32;
        fahrenheitInput.value = isNaN(fahrenheitValue) ? "" : fahrenheitValue.toFixed(2);
    } else if (unit === "fahrenheit") {
        const celsiusValue = (parseFloat(value) - 32) * 5/9;
        celsiusInput.value = isNaN(celsiusValue) ? "" : celsiusValue.toFixed(2);
    }
}
