/* 
    1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.

    Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

    НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.

    Примеры:

    calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'

    calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'

    calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'

    calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'

    calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'

    2) Постепенно переходим к более реалистичным задачам :) Вы обнаружите, что там используется все тоже самое.

    Напишите функцию, которая будет определять номер купе по переданному ей номеру места. 

    Функция принимает только целое число от 1 до 36.

    Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:

    "Ошибка. Проверьте правильность введенного номера места"

    Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

    Пример:

    getCoupeNumber(33)  => 9

    getCoupeNumber(7)  => 2

    getCoupeNumber(300)  => "Таких мест в вагоне не существует"

    getCoupeNumber(0)  => "Таких мест в вагоне не существует"

    getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"

    getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"

    getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"
*/

// Место для первой задачи
function calculateVolumeAndArea(n) {
    if(Number.isInteger(n)){
        let s = 6 * (n *n),
            v = n * n * n;
        return ` 'Объем куба: ${v}, площадь всей поверхности: ${s}`;
    } else {
        return 'При вычислении произошла ошибка';
    }
}
console.log(calculateVolumeAndArea(4.3));


// Место для второй задачи
function getCoupeNumber(n) {
    if(Number.isInteger(n)){
        switch(true){
            case n>0 && n<=4:
                return 1;
            case n>4 && n<=8:
                return 2;
            case n>8 && n<=12:
                return 3;
            case n>12 && n<=16:
                return 4;
            case n>16 && n<=20:
                return 5;
            case n>20 && n<=24:
                return 6;
            case n>24 && n<=28:
                return 7;
            case n>28 && n<=32:
                return 8;
            case n>32 && n<=36:
                return 9;
            default: 
                return "Таких мест в вагоне не существует";
        }
    } else{
        return "Ошибка. Проверьте правильность введенного номера места";
    }
}
console.log(getCoupeNumber(3.3));