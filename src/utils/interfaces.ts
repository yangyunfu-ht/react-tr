export interface stringValidator {
  name: string;
  age: number;
  // constructor(name: string, age: number): void;
  isAccpetTable(s: string): boolean;
}

export let username = 'username';

const person = {
  name: "John",
  age: 34,
}

export default person