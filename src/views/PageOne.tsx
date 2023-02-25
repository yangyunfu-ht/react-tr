import React, { Fragment } from 'react'
import { copyElementValue } from '@/utils/clipBoard'
import usePagation from '@/hooks/usepagation'

function Pageone() {
  const { page, pageSize, total, setPage, setTotal, setPageSize, fetchResult } = usePagation()
  console.log(fetchResult)
  return (
    <Fragment>
      <div>
        <p>
          page: {page}
          <button onClick={() => setPage(page + 1)}>changePage</button>
        </p>
        <p>
          page size: {pageSize}
          <button onClick={() => setPageSize(pageSize + 10)}>changePageSize</button>
        </p>
        <p>
          total: {total}
          <button onClick={() => setTotal(total + 10)}>changeTotal</button>
        </p>
      </div>
      <div onClick={e => copyElementValue(e.target as HTMLElement)} style={{ color: '#000000' }}>Pageone</div>
    </Fragment>
  )
}

export default Pageone