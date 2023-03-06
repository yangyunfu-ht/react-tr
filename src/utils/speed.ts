import type { stringValidator } from "./interfaces";
import { username } from "./interfaces";

export class zipCodeValidator implements stringValidator {
  name = ""
  age = 0
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  isAccpetTable(s: string): boolean {
    return !!s.length
  }
}


import("./interfaces.js").then(module => {
  for(let key in module) {
    console.log(module.username)
  }
})