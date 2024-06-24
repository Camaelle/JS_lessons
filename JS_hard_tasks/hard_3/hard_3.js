// Создайте функцию deepCount, которая будет считать количество всех элементов в массиве, включая и вложенные массивы. Учтите, что сам вложенный массив тоже входит в счет. Чтобы понять задачу детальнее, давайте рассмотрим примеры:

// deepCount([1, 5, 3]) => 3

// deepCount(["1", 5, "3", ["10"]]) => 5 (Заметьте, что последний элемент был посчитан сам + его внутренность)

// deepCount([1, 2, [3, 4, [5]]]) => 7

// deepCount([]) => 0

// deepCount([[[[[[[[[]]]]]]]]]) => 8


// Мой вариант
// function deepCount(a){
//     let count = 0;

//     if(Array.isArray(a)){
//         count += a.length;
//         a.forEach(item => {
//             count += deepCount(item);
//         });
//     }
//     return count; 
// }

// Вариант с циклом
// function deepCount(a){
//     let count = a.length;
//     for (let i=0; i<a.length; i++) if (Array.isArray(a[i])) count += deepCount(a[i]);
//     return count;
// }

// Вариант с методом reduce
function deepCount(a){
    return a.reduce((s,e)=>s+(Array.isArray(e) ? deepCount(e) : 0),a.length);
}

console.log(deepCount([1, 5, 3]));
console.log(deepCount(['1', 5, '3', ['10']]));
console.log(deepCount([1, 2, [3, 4, [5]]]));
console.log(deepCount([]));
console.log(deepCount([[[[[[[[[]]]]]]]]]));