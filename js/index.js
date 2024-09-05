document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('inputText');
    const saveButton = document.getElementById('buttonText');

    saveButton.addEventListener('click', () => {
        const inputValue = inputField.value;
        // Guardar el valor en localStorage
        localStorage.setItem('userData', inputValue);
    });
});
