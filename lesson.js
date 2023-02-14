//Комментари
/*многострочный
коммента-
рий
console.log("Текст 1");
let arr = [5,2,"str", true];

Циклы

let count = 0;
while(count < 10) {
    console.log(count);
    count++
}

let count = 0;
while(count < 10) {
    console.log(count);
    if (count==4) {
        break;
    }
    count++;
}
Сначала выполняется значение count
let count = 10;
 do {
    console.log(count);
    count++;
  } while(count < 15);
    
    for(let i=0; i<10; i+=2) {
        console.log(i)
    }
//массивы и циклы
let arr = [5, 7, 9, 1, 0];
    for(let i=0; i<arr.length; i++) {
        console.log(arr[i])
    }

    let arr = [5, 7, 9, 1, 0];
    for(let item of arr) {
        console.log(item*2)  
    }  

    //объекты и циклы
//ключи
let obj = {
    "name": "Petr",
    "age" : 25,
    "number" : 89608361610
}
for (let key in obj) {
    console.log(key)
}
значения
let obj = {
    "name": "Petr",
    "age" : 25,
    "number" : 89608361610
}
for (let key in obj) {
    console.log(obj[key])
}
//ключи и значения
let obj = {
    "name": "Petr",
    "age" : 25,
    "number" : 89608361610
}
for (let key in obj) {
    console.log ('Ключ ${key}, Значение ${obj[key]}')
} Почему то не работает
let arr = [5, 7, 9, 1, 0];
arr.forEach(function(item, i, array) {
    console.log('Элемент: ${item}
    Индекс: ${i}
    Удвоенный элемент: ${item*2}')
}) Почему то выдает ошибку

