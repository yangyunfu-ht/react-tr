import React from 'react'
import { useAppSelector, useAppDispatch } from '@/hooks/useReduxtoolkit'
import { changeCurrentPage, changePageSize } from '@/features/pageSlice'

function PageFour() {
  const currentPageCount = useAppSelector((state) => state.pageer.currentPage)
  const currentPageSize = useAppSelector((state) => state.pageer.pageSize)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div>currentPageCount: { currentPageCount }</div>
      <div>currentPageSize: { currentPageSize }</div>
      <div>
        <div>
          <button onClick={ () => dispatch(changeCurrentPage())}>change currentPageCount</button>
        </div>
        <div>
          <button onClick={ () => dispatch(changePageSize())}>change currentPageSize</button>
        </div>
      </div>
    </div>
  )
}

export default PageFour