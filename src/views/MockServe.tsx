import React, { useEffect } from 'react'
import axios from 'axios'

const MockServe = () => {
  useEffect(() => {
    axios.get('/mock/api/statusList').then(res => {
      console.log(res)
    }) 

    axios.post('/mock/api/logList', { page: 1, pageSize: 10 }).then(result => {
      console.log(result)
    })
  },[])

  return (
    <div>MockServe</div>
  )
}

export default MockServe