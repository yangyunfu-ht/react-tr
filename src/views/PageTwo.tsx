import React from 'react'
import { decrement, increment, incrementBySAnmount } from '@/features/counterSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxtoolkit'

function PageTwo() {
  const count = useAppSelector((state) => state.counter.value)
  const name = useAppSelector((state) => state.counter.name)
  const dispatch = useAppDispatch()

  return (
    <div>
      PageTwo
      <div>
      <div>
        <span>{count}{name}</span>
        <br/>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <br/>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <br/>
        <button
        aria-label='Increment value'
        onClick={() => dispatch(incrementBySAnmount({
          value: 10,
          name: 'yyf'
        }))}
        >
          payload
        </button>
      </div>
    </div>
    </div>
  )
}

export default PageTwo