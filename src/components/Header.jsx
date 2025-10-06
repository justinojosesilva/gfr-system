import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="shadow sticky top-0 z-50" style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}>
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="G.F.R" className="h-20 w-60" />
          {/* <span className="font-heading font-bold text-xl text-[var(--color-primary)]">G.F.R Serviços e Instalações Elétricas</span> */}
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link to="/" className="hover:text-[var(--color-secondary)]">Home</Link>
          <Link to="/empresa" className="hover:text-[var(--color-secondary)]">Empresa</Link>
          <Link to="/serviços" className="hover:text-[var(--color-secondary)]">Serviços</Link>
          <Link to="/produtos" className="hover:text-[var(--color-secondary)]">Produtos</Link>
          <Link to="/contato" className="hover:text-[var(--color-secondary)]">Contato</Link>
        </nav>
      </div>
    </header>
  )
}