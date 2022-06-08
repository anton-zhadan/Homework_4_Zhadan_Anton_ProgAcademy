// Напиши функцію map (fn, array), яка приймає на вхід функцію і масив, і обробляє кожен елемент масиву цією функцією, повертаючи новий масив. 

function myFunc(arr, instruct) {
    let outputArr = [];

    for (let i = 0; i < arr.length; i++) {
        outputArr.push(instruct(arr[i]));
    }

    return document.write(outputArr);
}

const numSquared = (num) => {
    return num ** 2;
}

myFunc([1, 2, 3], numSquared);



//Перепишіть функцію, використовуючи оператор '?' або '||'
//Наступна функція повертає true, якщо параметр age більше 18.
//В іншому випадку вона задає питання confirm і повертає його результат.

function checkAge(age) {
    return (age > 18) ? true : confirm('Батьки дозволили?');
}

checkAge(15);