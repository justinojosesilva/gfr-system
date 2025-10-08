import { useParams } from 'react-router-dom'
import { products } from '../data/products'

export default function Produto() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <main className="container py-10">
        <h1 className="text-2xl font-bold mb-4 text-red-600">Produto não encontrado</h1>
        <p className="text-slate-700">Verifique o link ou volte ao catálogo.</p>
        <a href="/produtos" className="btn btn-secondary mt-4 inline-block">Voltar ao Catálogo</a>
      </main>
    )
  }

  return (
    <main className="container py-10">
      <h1 className="text-3xl font-bold mb-4 text-[var(--color-primary)]">{product.name}</h1>
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <img src={product.image} alt={product.name} className="w-125 rounded h-125" />
        <div>
          <h2 className="font-heading text-xl font-semibold mb-2">Descrição</h2>
          <p className="text-slate-700 mb-4">{product.description}</p>
          <a href="/contato" className="btn btn-primary inline-block">Solicitar Orçamento</a>
        </div>
      </div>
    </main>
  )
}