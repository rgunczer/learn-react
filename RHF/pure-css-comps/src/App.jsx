import { useState } from 'react'
import './App.css'
import FloatingLabelInput from './components/FloatingLabelInput'

function App() {
  const [radius, setRadius] = useState('200');

  return (
    <div style={{ padding: '2rem' }}>
      <FloatingLabelInput
        label="Radius (km)"
        value={radius}
        onChange={(e) => setRadius(e.target.value)}
      />
    </div>
  )
}

export default App
