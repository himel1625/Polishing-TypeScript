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
// let value: any = 5;
// value = "hello";
// value = true;
// let value: unknown = 5;
// if (typeof value === 'string') {
//    console.log(value.toUpperCase()); // Safe to use value as a string
// }
// function greet(name: string): void {
//    console.log(`Hello, ${name}!`);
// }
// greet('Code Ninja');
// function Abcd(): never {
//    while (true) {}
// }
// Abcd();
// inference & Annotation
// Inference
var inferredNumber = 10;
// Annotation
var annotatedNumber = 10;
var annotate = function (a, b) {
    console.log(a, b);
};
annotate('HImel', 18);
