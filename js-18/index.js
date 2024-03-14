// 1) Вариант вычисления степени с помощью цикла
// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++){
//         result *= x;
//     }

//     return result;
// }

// 2) Вариант вычисления степени с помощью рекурсии
// function pow(x, n) {
//     if( n === 1){
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }

// pow(2, 1) // 2
// pow(2, 2) // 4
// pow(2, 3) // 8
// pow(2, 4) // 16


let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        },{
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }],
        new: [{
            name: 'Test',
            progress: 100
        }]
    }
};

function getTotalProgressByIteration(data){
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;

                for( let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    }

    return total / students;
}

// console.log(getTotalProgressByIteration(students));


function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    }
}

const result = getTotalProgressByRecursion(students);
console.log(result[0]/result[1]);

function lessRecursion(){
    // let count = 0;

    // function recurse(){
    //     if(count === 5) return 'Done';

    //     count++;
    //     return recurse();
    // }

    // console.log(recurse());
    // console.log('count =' , count);


    // //Math.pow(5, 3)
    // function pow(x, y){
    //     if(y === 0 ) return 1;

    //     return x * pow(x, y -1);
    // }

    // let result =     pow(5, 3);
    // console.log(result);

    // function sumOjDigits(number){

    // }
    // sumOjDigits(100)

    // offset
    // let offset = 0;

    // function move(){
    //     offset += 5;
    //     document.querySelector('.test').style.left = offset + 'px';
    //     if (offset > 300) {
    //         return true;
    //     }
    //     setTimeout(move, 500);
    // }

    //1! = 1
    //2! = 1 * 2 = 2
    //3! = 1 * 2 * 3 = 6
    //4! = 1 * 2 * 3 * 4 = 24
    function factorial(n){
        if ( n < 0) console.log('factorial вызван с неверным значением n');
        if (n === 0) return 1;

        return n * factorial( n - 1);
    }
    console.log(factorial(4));

    // factorial(4) = 4 * factorial(3);
    // factorial(3) = 3 * factorial(2);
    // factorial(2) = 2 * factorial(1);
    // factorial(1) = 1 * factorial(0);
    // factorial(0) = 1; 

    // factorial(0) = 1;
    // factorial(1) = 1 * 1 = 1;
    // factorial(2) = 1 * 2 = 2;
    // factorial(3) = 2 * 3 = 6;
    // factorial(4) = 6 * 4 = 24;    
}
lessRecursion();