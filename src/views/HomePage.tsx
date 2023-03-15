import React from 'react'
import { useMount, useUnMount } from '@/hooks/useLifeHooks'

const getList = () => {
  const result = []
  for (let i = 0; i < 100; i++) {
    result.push(i)
  }
  return result
}

function HomePage() {
  useMount(() => {
    console.log('page mount')
  })

  useUnMount(() => {
    console.log('page unMount')
  })

  return (
    <div>
      HomePage
      <ul>
        {
          getList().map(item => {
            return <li
              key={item}
              draggable={true}
              style={{ textAlign: 'center' }}
            >
              {item}
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default HomePage