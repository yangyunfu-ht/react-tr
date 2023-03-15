import { MockMethod } from 'vite-plugin-mock'

const arr = []
for(let i = 0; i < 20; i++) {
  arr.push({
    customer_name: 'wade',
    status_text: '登录成功',
    os: 'Windows 10',
    browser: 'Chrome(99.0.4844.51)',
    ip: '192.168.9.110',
    created: '2021-12-14 10:41:02',
    location: '局域网 局域网',
    id: i
  })
}

const logList = {
  total: 20,
  page: 1,
  pageSize: 10,
  list: arr
}

const statusList = [
  {
    label: '待审核',
    value: '0'
  },
  {
    label: '审核通过',
    value: '1'
  },
  {
    label: '审核未通过',
    value: '2'
  },
  {
    label: '全部',
    value: '3'
  }
]

export default [
  {
    url: '/mock/api/logList',
    method: 'post',
    response: () => {
      return logList
    }
  },
  {
    url: '/mock/api/statusList',
    method: 'get',
    response: () => {
      return statusList
    }
  }
] as MockMethod[]