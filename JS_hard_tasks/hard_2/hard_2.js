// Напишите функцию isPangram, которая принимает в себя строку и возвращает логическое значение.Если строка является панграммой - вернется true, если нет - false.

// Моё решение
/*
    function isPangram(string) {
        let newSet = new Set(string.trim());
        let alphabet = 'abcdefghijklmnopqrstuvwxyz';


        for (let letter of alphabet) {
            if (!newSet.has(letter)) {
                return false;
            }
        }

        return true;
    }

    console.log(isPangram('The quick brown fox jumps over the lazy dog'));
    // console.log(isPangram('Hello world'));

*/

// Вариант, когда строка переводится в нижний регистр до всех операций только 1 раз
// Это должно экономить ресурсы компьютера
function isPangram1(string){
    string = string.toLowerCase();
    return 'abcdefghijklmnopqrstuvwxyz'.split('').every(function(x){
      return string.indexOf(x) !== -1;
    });
}

// С другим методом и строка каждый раз преобразовывается в коллбэке
function isPangram2(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
}

// При помощи цикла
function isPangram3(str) {
    letters: for (var c = 0; c < 26; c++) {
        for (let i = 0; i < str.length; i++) {
            let s = str.charCodeAt(i);
            if (s < 65 || s > 90 && s < 97 || s > 122) continue;
            if (s === 65 + c || s === 97 + c) continue letters;
        }
      
        return false;
    }
    
    return true;
}

// При помощи Set
function isPangram4(string) {
    return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
}

// С использованием регулярных выражений
function isPangram5(string){
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}

console.log(isPangram1('The quick brown fox jumps over the lazy dog'));
console.log(isPangram1('Hello world'));

console.log(isPangram2('The quick brown fox jumps over the lazy dog'));
console.log(isPangram2('Hello world'));

console.log(isPangram3('The quick brown fox jumps over the lazy dog'));
console.log(isPangram3('Hello world'));

console.log(isPangram4('The quick brown fox jumps over the lazy dog'));
console.log(isPangram4('Hello world'));

console.log(isPangram5('The quick brown fox jumps over the lazy dog'));
console.log(isPangram5('Hello world'));