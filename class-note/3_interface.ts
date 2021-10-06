interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
const user: User = {
    age: 33,
    name: 'user',
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}
const capt = {
    name: '캡틴',
    age: 100,
}
getUser(capt);

// 함수의 구조에 인터페이스 활용
interface SumFunction {
    (a: number, b: number): number;
}

let sum: SumFunction;
sum = function(a: number, b: number): number {
    return a + b;
}