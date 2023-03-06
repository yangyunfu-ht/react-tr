declare const foo: number; 

declare function greeting(content: string): string;

declare namespace myLib {
  function makeGretting(s: string): string
  let numberOfGretting: number
}

declare interface GrettingSetings {
  grettings: string
  durations: number
  color?: string
}

declare function useGretting(s: GrettingSetings): GrettingSetings
