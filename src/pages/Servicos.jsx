export default function Servicos() {
  const servicos = [
    'Instalação elétrica residencial e industrial',
    'Manutenção preventiva e corretiva',
    'Automação predial e industrial',
    'Análise de consumo e eficiência energética',
  ]
  return (
    <main className="container py-10">
      <h1 className="text-3xl font-bold mb-4">Serviços</h1>
      <ul className="space-y-2">
        {servicos.map((s) => (
          <li key={s} className="p-3 border rounded">{s}</li>
        ))}
      </ul>
    </main>
  )
}