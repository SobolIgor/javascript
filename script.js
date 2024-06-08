// JavaScript для Завдання 1
function getCategories() {
    const numCategories = document.getElementById('numCategories').value;
    const categoriesForm = document.getElementById('categoriesForm');
    categoriesForm.innerHTML = '';

    for (let i = 0; i < numCategories; i++) {
        categoriesForm.innerHTML += `
            <div>
                <label for="category${i}">Категорія ${i + 1}:</label>
                <input type="text" id="category${i}" name="category${i}" required>
                <label for="amount${i}">Сума витрат:</label>
                <input type="number" id="amount${i}" name="amount${i}" min="0" required>
            </div>
        `;
    }

    categoriesForm.innerHTML += '<button type="button" onclick="calculateTotal()">Обчислити загальну суму</button>';
}

function calculateTotal() {
    const numCategories = document.getElementById('numCategories').value;
    let totalExpenses = 0;
    const expenses = {};

    for (let i = 0; i < numCategories; i++) {
        const category = document.getElementById(`category${i}`).value;
        const amount = parseFloat(document.getElementById(`amount${i}`).value);
        expenses[category] = amount;
        totalExpenses += amount;
    }

    alert(`За минулий місяць Ви витратили ${totalExpenses} грн`);
}


// JavaScript для Завдання 2
function rangeNumbers() {
    const startNumber = parseInt(document.getElementById('startNumber').value);
    const endNumber = parseInt(document.getElementById('endNumber').value);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (endNumber <= startNumber) {
        resultDiv.innerHTML = 'Помилка: b повинно бути більше ніж a';
        return;
    }

    let result = 'Непарні числа: ';
    for (let i = startNumber; i <= endNumber; i++) {
        if (i % 2 !== 0) {
            result += i + ' ';
        }
    }

    resultDiv.innerHTML = result;
}


// JavaScript для Завдання 1
function calculateArraySum() {
    const arrayInput = document.getElementById('arrayInput').value;
    const array = arrayInput.split(',').map(Number);
    const sum = array.reduce((total, num) => total + num, 0);

    document.getElementById('arraySumResult').innerText = `Сума елементів масиву: ${sum}`;
}


// JavaScript для Завдання 2
function sortNumbers() {
    const numbersInput = document.getElementById('numbersInput').value;
    const numbersArray = numbersInput.split(',').map(Number);
    const sortedArray = numbersArray.sort((a, b) => b - a);

    document.getElementById('sortedNumbersResult').innerText = `Відсортовані числа: ${sortedArray.join(', ')}`;
}


// JavaScript для Завдання 3
function findMinMax() {
    const arrayInput = document.getElementById('minMaxArrayInput').value;
    const array = arrayInput.split(',').map(Number);
    const min = Math.min(...array);
    const max = Math.max(...array);

    document.getElementById('minMaxResult').innerText = `Найменше число: ${min}, Найбільше число: ${max}`;
}


// JavaScript для Завдання 1
function containsElement() {
    const arrayInput = document.getElementById('arrayInput1').value;
    const elementInput = document.getElementById('elementInput').value;
    const array = arrayInput.split(',').map(Number);
    const element = Number(elementInput);
    const result = array.includes(element);

    document.getElementById('containsElementResult').innerText = `Елемент ${element} ${result ? 'присутній' : 'відсутній'} в масиві.`;
}


// JavaScript для Завдання 2
function findFirstNegative() {
    const arrayInput = document.getElementById('arrayInput2').value;
    const array = arrayInput.split(',').map(Number);
    const firstNegative = array.find(num => num < 0);
    const result = firstNegative !== undefined ? firstNegative : null;

    document.getElementById('findFirstNegativeResult').innerText = result !== null ? 
        `Перший негативний елемент: ${result}` : 'Негативних елементів немає.';
}


// JavaScript для Завдання 3
function countEvenNumbers() {
    const arrayInput = document.getElementById('arrayInput3').value;
    const array = arrayInput.split(',').map(Number);
    const evenCount = array.filter(num => num % 2 === 0).length;

    document.getElementById('countEvenNumbersResult').innerText = `Кількість парних чисел: ${evenCount}`;
}


// JavaScript для Завдання 1
function countWordOccurrences() {
    // Отримуємо значення введених користувачем даних
    let inputString = document.getElementById('inputString').value;
    let searchWord = document.getElementById('searchWord').value;
    
    // Розділити рядок на масив слів за пробілами
    let words = inputString.split(" ");
    
    // Ініціалізуємо лічильник
    let count = 0;
    
    // Проходимо через кожне слово у масиві та порівнюємо його з заданим словом
    for(let i = 0; i < words.length; i++) {
        // Якщо слово збігається, збільшуємо лічильник
        if(words[i] === searchWord) {
            count++;
        }
    }
    
    // Виводимо результат у вікні повідомлення
    alert(`Кількість разів, коли слово '${searchWord}' зустрічається у рядку: ${count}`);
}

