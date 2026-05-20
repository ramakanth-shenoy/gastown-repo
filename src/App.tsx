import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import CreationalIndex from './pages/creational/CreationalIndex'
import Singleton from './pages/creational/Singleton'
import FactoryMethod from './pages/creational/FactoryMethod'
import AbstractFactory from './pages/creational/AbstractFactory'
import Builder from './pages/creational/Builder'
import Prototype from './pages/creational/Prototype'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<CreationalIndex />} />
          <Route path="/creational" element={<CreationalIndex />} />
          <Route path="/creational/singleton" element={<Singleton />} />
          <Route path="/creational/factory-method" element={<FactoryMethod />} />
          <Route path="/creational/abstract-factory" element={<AbstractFactory />} />
          <Route path="/creational/builder" element={<Builder />} />
          <Route path="/creational/prototype" element={<Prototype />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
