import { Link } from 'react-router-dom'
import { products } from '../data/products'

export default function Produtos() {
  return (
    <main className="container py-10">
      <h1 className="text-3xl font-bold mb-6 text-[var(--color-primary)]">Produtos</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="card">
            <Link to={`/produtos/${p.id}`} aria-label={`Ver detalhes de ${p.name}`}>
              <img src={p.image} alt={p.name} className="w-full rounded h-64 object-cover" />
            </Link>
            <h3 className="font-semibold mt-3 text-center">{p.name}</h3>
          </div>
        ))}
      </div>
    </main>
  )
}