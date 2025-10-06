import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppCTA from './components/WhatsAppCTA'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <WhatsAppCTA />
    </div>
  )
}
