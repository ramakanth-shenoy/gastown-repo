import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import CreationalIndex from './pages/creational/CreationalIndex'
import Singleton from './pages/creational/Singleton'
import FactoryMethod from './pages/creational/FactoryMethod'
import AbstractFactory from './pages/creational/AbstractFactory'
import Builder from './pages/creational/Builder'
import Prototype from './pages/creational/Prototype'
import StructuralPatterns from './pages/StructuralPatterns'
import AdapterPattern from './pages/patterns/AdapterPattern'
import BridgePattern from './pages/patterns/BridgePattern'
import CompositePattern from './pages/patterns/CompositePattern'
import DecoratorPattern from './pages/patterns/DecoratorPattern'
import FacadePattern from './pages/patterns/FacadePattern'
import FlyweightPattern from './pages/patterns/FlyweightPattern'
import ProxyPattern from './pages/patterns/ProxyPattern'
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
          <Route path="/structural" element={<StructuralPatterns />} />
          <Route path="/structural/adapter" element={<AdapterPattern />} />
          <Route path="/structural/bridge" element={<BridgePattern />} />
          <Route path="/structural/composite" element={<CompositePattern />} />
          <Route path="/structural/decorator" element={<DecoratorPattern />} />
          <Route path="/structural/facade" element={<FacadePattern />} />
          <Route path="/structural/flyweight" element={<FlyweightPattern />} />
          <Route path="/structural/proxy" element={<ProxyPattern />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
