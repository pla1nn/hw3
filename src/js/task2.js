const form = document.querySelector('.reg__form');

const setData = () => {
    const savedData = JSON.parse(localStorage.getItem('userData')) || {};
    Object.entries(savedData).forEach(([key, value]) => {
        const input = form.querySelector(`input[name="${key}"]`);
        if (input) {
            input.value = value;
        }
    });
};

const saveData = () => {
    const inputs = form.querySelectorAll('.reg__input');
    const formData = {};
    inputs.forEach(input => {
        formData[input.name] = input.value;
    });
    localStorage.setItem('userData', JSON.stringify(formData));
};

setData();

form.addEventListener('input', saveData);


form.addEventListener('submit', (e) => {
    e.preventDefault();
});