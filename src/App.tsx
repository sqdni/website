import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DocumentTitle } from './components/DocumentTitle'
import { Layout } from './components/Layout'
import { ScrollToTop } from './components/ScrollToTop'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { Rewards } from './pages/Rewards'
import './styles/global.css'

function App() {
  return (
    <BrowserRouter>
      <DocumentTitle />
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/rewards" element={<Rewards />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
