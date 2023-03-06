// declare module 'express' {
//   interface App {
//     use(url: string, router: any): void
//     listen(port: number | string, callback?: () => void)
//   }
  
//   interface Response {
//     json(context: any): any,
//     redirect(url: string): void
//   }

//   interface Request {
//     url: string
//   }

//   interface Router {
//     get(url: string, callback: (request: Request, response: Response) => any): any
//     post(url: string, callback: (request: Request, response: Response) => any): any
//   }

//   interface Express {
//     (): App
//     Router(): Router
//   }

//   const express: Express

//   export default express
// }