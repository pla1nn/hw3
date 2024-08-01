const form = document.querySelector('.todo__form');
const selectedTodos = JSON.parse(localStorage.getItem('selectedTodos')) || {};
initForm();

form.addEventListener('change', onInputChange);

function onInputChange(e) {
    selectedTodos[e.target.name] = e.target.checked;
    localStorage.setItem('selectedTodos', JSON.stringify(selectedTodos))
}

function initForm() {
    const checkedItems = localStorage.getItem('selectedTodos');
    if (checkedItems) {
        const parsedItems = JSON.parse(checkedItems);
        Object.entries(parsedItems).forEach(([name, checked]) => {
            const checkBox = form.querySelector(`input[name="${name}"]`);
            if (checkBox) {
                checkBox.checked = checked;
            }
        });
    }
}