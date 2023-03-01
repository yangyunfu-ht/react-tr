import axios, { AxiosHeaders } from 'axios';
import { config } from 'process';

interface HTTPClass {
  username: string;
  getList: Function
}

export interface HttpResponse {
  conffig: any,
  data: any,
  headers: AxiosHeaders,
  request: XMLHttpRequest,
  status: number,
  statusText: string
}

const Base = (name: string) => {
  const fn: ClassDecorator = (target) => {
    target.prototype.username = name;
  }
  return fn
}

const GetMethod = (url: string) => {
  const fn: MethodDecorator = (target, key, desctiptor: PropertyDescriptor) => {
    axios.get(url, {
      headers: {
        contentType: 'application/json;charset=utf-8'
      }
    }).then(res => {
      desctiptor.value(res)
    })
  }
  return fn
}


@Base('yyf')
class Http {
  username: string = ''

  @GetMethod('/getList')
  getList(data: any) {
  }
}


const http: HTTPClass = new Http()

export default http