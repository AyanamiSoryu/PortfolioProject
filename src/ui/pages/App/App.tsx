import React, { memo } from 'react'
import './App.css'
import Portfolio from '../../smart-components/Portfolio'

export interface AppProps {}

const App: React.FC<AppProps> = () => (
  <div className="it should be router or so on">
    <Portfolio />
  </div>
)

export default memo(App)
