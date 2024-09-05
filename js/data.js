// _js/data.js

document.addEventListener('DOMContentLoaded', () => {
    const dataElement = document.getElementById('data');
    
    // Obtener el valor de localStorage
    const storedData = localStorage.getItem('userData');

    // Mostrar el valor
    if (storedData !== null) {
        dataElement.textContent = storedData;
    } else {
        dataElement.textContent = 'No hay datos para mostrar. (T-T)';
    }
});
