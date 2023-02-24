import React from 'react'
import { useNavigate } from 'react-router-dom'

function Opps() {
  const navigate = useNavigate()
  return (
    <div
      style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', width: '100%'
      }}>
      <h2>Opps</h2>
      <h3>page no't found</h3>
      <p>
        <button onClick={ () => navigate('/') }>go home</button>
      </p>
    </div>
  )
}

export default Opps