// import { type } from '@/utils/';
interface User {
  name: string
  age: number
}

interface Man {
  sex: boolean
}

/**
 * 联合类型
 */
interface DetailUser extends User {
  address: string,
  sex: boolean
}

const detailPerson: DetailUser = {
  name: 'John',
  age: 36,
  address: '123 Main Street',
  sex: false
}

// detailPerson.

const fn = (user: User): User => {
  return user
}


/**
 * 
 * @param man 
 * 交叉类型（跟联合类型一样的结果）
 */
const yyf = (man: User & Man) => {
  // console.log('getUser', man)
}

yyf({
  name: 'yyf',
  age: 23,
  sex: true,
})


let a = fn({
  name: 'John',
  age: 0,
})

let phone: number | string = '18212800173'

const changeType = (type: number) => {
  return !!type
}

const value = changeType(10)

// console.log(value)


export type num = 1 extends number ? 1 : 0

type str = '1' extends string ? '1' : '0'

function sum<T>(a: T, b: T): T[] {
  return [a, b]
}

function muiltSum<T, U> (x: T, y: U) {
  return [x, y]
}

const arr = sum(2, 3)

const arr2 = sum('1', '2')

const arr3 = sum(true, false)

const m1 = muiltSum(1, '2')

const m2 = muiltSum(true, '2')

muiltSum(1, '2')

// const arr4 = sum( 1, '2')

interface Length {
  length: number
}

function getLength<T extends Length>(value: T): number {
  return value.length
}

// getLength(true)

function getProp<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

const obj = { a: 1, b: 2, c: 3, d: 4, e: 5}

// console.log(getProp(obj, 'a'))
// console.log(getProp(obj, 'c'));


interface A {
  name: string
  age: number
}

interface B {
  name: string
  age: number
  sex: boolean
}

let aValue: A = {
  name: 'John',
  age: 40,
}

let bValue: B = {
  name: 'Bob',
  age: 40,
  sex: true
}

aValue = bValue
// bValue = aValue

// keyof B = "name" | "age" | "sex"

const keyofValue: keyof B =  'sex'


// aValue.sex = true

const proxy = (target: any, key: any) => {
  return new Proxy(target, {
    get(target, prop, receiver) {
      // console.log("===get", prop)
      return Reflect.get(target, prop, receiver)
    },
    set(target, prop, value, receiver) {
      // console.log("===set", prop)
      return Reflect.set(target, prop, value, receiver)
    }
  })
}

const logAccess =<T> (target: T, key: keyof T) => {
  return proxy(target, key)
}


const nameProp = logAccess({
  name: 'yyf',
  age: 40,
}, 'name')

nameProp.name = nameProp.name + '11 '
// console.log(nameProp.name )

interface animal{
  name: string
  age: number
  sex: boolean
}

type AnimalToType<T> = {
  [p in keyof T]?: T[p]
}


type animalType = Partial<animal>

type animalType2 = AnimalToType<animal>

type p2 = Pick<animal, 'age' | 'sex'>