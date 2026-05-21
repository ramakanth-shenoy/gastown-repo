import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

const CreationalIndex = lazy(() => import('./pages/creational/CreationalIndex'))
const Singleton = lazy(() => import('./pages/creational/Singleton'))
const FactoryMethod = lazy(() => import('./pages/creational/FactoryMethod'))
const AbstractFactory = lazy(() => import('./pages/creational/AbstractFactory'))
const Builder = lazy(() => import('./pages/creational/Builder'))
const Prototype = lazy(() => import('./pages/creational/Prototype'))
const StructuralPatterns = lazy(() => import('./pages/StructuralPatterns'))
const AdapterPattern = lazy(() => import('./pages/patterns/AdapterPattern'))
const BridgePattern = lazy(() => import('./pages/patterns/BridgePattern'))
const CompositePattern = lazy(() => import('./pages/patterns/CompositePattern'))
const DecoratorPattern = lazy(() => import('./pages/patterns/DecoratorPattern'))
const FacadePattern = lazy(() => import('./pages/patterns/FacadePattern'))
const FlyweightPattern = lazy(() => import('./pages/patterns/FlyweightPattern'))
const ProxyPattern = lazy(() => import('./pages/patterns/ProxyPattern'))

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={null}>
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
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}

export default App
