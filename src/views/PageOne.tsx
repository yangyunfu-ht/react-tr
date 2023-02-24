import React from 'react'
import { copyElementValue } from '@/utils/clipBoard'

function Pageone() {
  return (
    <div onClick={e => copyElementValue(e.target as HTMLElement)} style={{ color: '#000000' }}>Pageone</div>
  )
}

export default Pageone