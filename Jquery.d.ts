declare const Jquery: (Selector: string) => HTMLElement

declare function $(selector: string): HTMLElement

declare class Animal {
  name: string
  constructor(name: string)
  sayHi(): void
}


declare interface personPropy {
  name: string
  age: number
  address: string
  phone: string
}


declare namespace jQueryClass {
  function ajax(url: string, settings?: any): void;
  const version: number;
  class Event {
      blur(eventType: EventType): void
  }
  enum EventType {
      CustomClick
  }
}