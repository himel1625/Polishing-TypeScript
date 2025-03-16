# TypeScript Learning Guide

## Overview

This repository provides a **comprehensive guide** to learning TypeScript, a **strongly typed superset** of JavaScript that enhances **code maintainability, scalability, and developer experience**.

## Why Learn TypeScript?

- **Static Typing**: Catch errors at compile-time instead of runtime.
- **Enhanced Developer Experience**: Autocompletion, inline documentation, and better refactoring.
- **Object-Oriented Programming (OOP) Features**: Classes, interfaces, and generics for structured code.
- **Improved Code Readability and Maintainability**.
- **Better Refactoring and Scalability**: Easier collaboration on large-scale projects.

## Installation

To install TypeScript globally, run:

```sh
npm install -g typescript
```

To verify installation:

```sh
tsc --version
```

## Getting Started

### Declaring Variables

```ts
let message: string = 'Hello, TypeScript!';
let count: number = 10;
let isDone: boolean = false;
```

### Functions

```ts
function add(a: number, b: number): number {
   return a + b;
}
```

### Interfaces vs. Type Aliases

```ts
interface User {
   name: string;
   age: number;
}

type Employee = {
   id: number;
   role: string;
};

const user: User = { name: 'John', age: 25 };
const employee: Employee = { id: 101, role: 'Developer' };
```

### Classes and Access Modifiers

```ts
class Person {
   private name: string;
   constructor(name: string) {
      this.name = name;
   }
   public greet() {
      return `Hello, my name is ${this.name}`;
   }
}
const person = new Person('Alice');
console.log(person.greet());
```

### Generics

```ts
function identity<T>(arg: T): T {
   return arg;
}
let output = identity<string>('Hello');
```

## Modules Example

### Create a File `math.ts`

```ts
export function square(x: number): number {
   return x * x;
}
```

### Import in `main.ts`

```ts
import { square } from './math';
console.log(square(4));
```

## Compiling TypeScript

Compile TypeScript files to JavaScript:

```sh
tsc filename.ts
```

Enable automatic compilation with:

```sh
tsc --watch
```

## TypeScript Configuration

Create a `tsconfig.json` file:

```json
{
   "compilerOptions": {
      "target": "ES6",
      "module": "CommonJS",
      "strict": true
   }
}
```

## Advanced Topics

### Union & Intersection Types

```ts
type Admin = { name: string; privileges: string[] };
type Employee = { name: string; startDate: Date };
type AdminEmployee = Admin & Employee;
const adminEmployee: AdminEmployee = {
   name: 'John',
   privileges: ['Manage Users'],
   startDate: new Date()
};
```

### Type Assertions

```ts
let someValue: any = 'Hello TypeScript';
let strLength: number = (someValue as string).length;
```

### Enums

```ts
enum Color {
   Red,
   Green,
   Blue,
}
let c: Color = Color.Green;
```

### Utility Types (`Partial`, `Pick`, `Omit`)

```ts
interface User {
   name: string;
   age: number;
   email: string;
}

const partialUser: Partial<User> = { name: 'Alice' }; // Optional properties
const pickedUser: Pick<User, 'name' | 'email'> = { name: 'Alice', email: 'alice@example.com' }; // Select properties
const omittedUser: Omit<User, 'age'> = { name: 'Alice', email: 'alice@example.com' }; // Remove a property
```

### Readonly Modifier

```ts
interface Car {
   readonly brand: string;
}
const myCar: Car = { brand: 'Tesla' };
// myCar.brand = 'Ford'; // ❌ Error: Cannot assign to 'brand' because it is a read-only property
```

## TypeScript with React.js

### Typing Props in React Components

```tsx
import React from 'react';

type Props = {
   name: string;
};

const Greeting: React.FC<Props> = ({ name }) => {
   return <h1>Hello, {name}!</h1>;
};

export default Greeting;
```

### Typing `useState` and `useEffect`

```tsx
import React, { useState, useEffect } from 'react';

const Counter: React.FC = () => {
   const [count, setCount] = useState<number>(0);

   useEffect(() => {
      console.log(`Count updated: ${count}`);
   }, [count]);

   return (
      <div>
         <p>Count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
   );
};

export default Counter;
```

## TypeScript with Next.js

### Creating a TypeScript Next.js Project

```sh
npx create-next-app@latest my-app --typescript
```

### Typing `getServerSideProps`

```ts
import { GetServerSideProps } from 'next';

type Props = {
   message: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
   return {
      props: { message: 'Hello from Server!' }
   };
};

const Page: React.FC<Props> = ({ message }) => {
   return <h1>{message}</h1>;
};

export default Page;
```

### Typing `getStaticProps`

```ts
import { GetStaticProps } from 'next';

type Props = {
   data: string;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
   return {
      props: { data: 'This is static data' }
   };
};

const StaticPage: React.FC<Props> = ({ data }) => {
   return <h1>{data}</h1>;
};

export default StaticPage;
```

## Best Practices

✅ **Use TypeScript’s strict mode** (`"strict": true` in `tsconfig.json`).
✅ **Prefer `unknown` over `any`** to enforce type safety.
✅ **Avoid unnecessary type assertions** (`as any`).
✅ **Use interfaces for objects and `type` for complex unions/intersections**.
✅ **Utilize TypeScript utility types** (`Partial<T>`, `Pick<T, K>`, `Readonly<T>`).

## Conclusion

TypeScript enhances JavaScript with **static types, OOP principles, and better tooling**, making it a must-have for scalable applications. Mastering TypeScript will significantly improve your development workflow, whether you're building web applications, backend services, or large-scale enterprise solutions.

---

🔥 **Now go build something awesome with TypeScript! 🚀**

