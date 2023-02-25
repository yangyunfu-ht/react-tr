import React, { useState, useEffect } from "react";

interface PagationTypes {
  page: number;
  pageSize: number,
  total: number
}

interface FetchDataList {
  page: number;
  pageSize: number,
  total: number,
}

interface FetchDataListResult extends FetchDataList {
  code: number,
  message: string
  data: any
}

const fetchDataList = (params: FetchDataList): FetchDataListResult => {
  return {
    page: params.page,
    pageSize: params.pageSize,
    total: params.total,
    code: 200,
    message: "请求成功",
    data: [
      {
        name: 'yyf',
        age: 25,
        phone: 18213800173
      },
      {
        name: 'yyg',
        age: 30,
        phone: 15808858353
      }
    ]
  }
}

export default function usePagation (pagation: PagationTypes = {page: 1, pageSize: 10, total: 0}) {
  const [page, setPage] = useState(pagation.page)
  const [pageSize, setPageSize] = useState(pagation.pageSize)
  const [total, setTotal] = useState(pagation.total)
  const [fetchResult, setFetchResult] = useState<any>(null)

  useEffect(() => {
    setFetchResult(() => fetchDataList({ page, pageSize, total }))
  }, [page, pageSize, total])

  return {
    page,
    pageSize,
    total,
    setPage,
    setPageSize,
    setTotal,
    fetchResult
  }
}