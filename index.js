// console.log('Hello TypeScript');
// Arrays
// const arr: Array<number> = [1, 2, 3, 4, 5];
// console.log(arr);
// const arr: number[] = [54, 654, 51, 5, 4, 54, 5];
// console.log(arr);
//Tuples
// let arr: [string, number] = ['Himel', 18];
// console.log(arr);
// const arrs: { id: Number; Name: string } = {
//    id: 2342,
//    Name: 'Himel',
// };
// console.log(arrs);
// Enums
// enum Color {
//    Red = 'RED',
//    Green = 'GREEN',
//    Blue = 'BLUE',
// }
// let color: Color = Color.Green;
// console.log(color); // Output: GREEN
// Any,Unknown, Void & More
var value = 5;
value = "hello";
value = true;
var value = 5;
if (typeof value === 'string') {
    console.log(value.toUpperCase()); // Safe to use value as a string
}
function greet(name) {
    console.log("Hello, ".concat(name, "!"));
}
greet('Code Ninja');
function Abcd() {
    while (true) { }
}
Abcd();
