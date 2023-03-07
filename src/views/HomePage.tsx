import React from 'react'

const getList = () => {
  const result = []
  for (let i = 0; i < 100; i++) {
    result.push(i)
  }
  return result
}

const handleDrageEnter = (e: any) => {
  console.log(e)
}

const handleDrageEnd = (e: any) => {
  console.log(e)
  const { clientX, clientY, target } = e
  target.style.offsetHeight = clientY + 'px'
  // target.style.offsetLeft = clientX + 'px'
  
}

function HomePage() {
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
              // onDragEnter={ e =>  handleDrageEnter(e) }
              onDragEnd={ e => handleDrageEnd(e) }
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