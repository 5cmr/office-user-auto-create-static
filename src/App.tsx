import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Layout} from 'antd'

import NavBar from './components/NavBar'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Layout>
          <Layout.Header
              className="background-white"
              style={{padding: 0}}
          >
              <NavBar/>
          </Layout.Header>

          <Layout.Content>
              <Hero/>
          </Layout.Content>
      </Layout>
  )
}

export default App
