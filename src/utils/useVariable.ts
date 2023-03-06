import type { num } from '@/utils/useScript';

let num1: num = 1

type type1 = 1 extends number ? Array<any> : 1

interface keyValueInter<K,V> {
  key: K;
  value: V
}

const objInter: keyValueInter<string, number> = {
  key: '222',
  value: 1
}

const objInter1: keyValueInter<boolean, number> = {
  key: true,
  value: 1
}


const objInterArr: Array<keyValueInter<boolean, number>> = [{
  key: true,
  value: 1
}]

const result = foo / 2

//先定义变量，再定义类型
let p1 = {
  name: "树哥",
  age: 18,
  gender: "male",
};


type People = typeof p1;
function getName(p: People): string {
  return p.name;
}
getName(p1);

const requestResult = {
  data: {
    list: [
      {
        name: 'yyf',
        age: 18,
      }
    ],
    page: 1,
    size: 10
  },
  code: 200,
  msg: "OK",
}

type requestResultType = Partial<typeof requestResult>


interface Person {
  name?: string,
  age?: number,
  hobby?: string[]
}

const user: Required<Person> = {
  name: "树哥",
  age: 18,
  hobby: ["code"]
}

type Func = (s: string) => number

const test1: ReturnType<Func> = '1'.length


type P1 = NonNullable<string | number | undefined | null>; 
