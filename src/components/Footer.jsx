export default function Footer() {
  return (
    <footer className="mt-12" style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}>
      <div className="container py-8 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-heading font-semibold mb-2">G.F.R Serviços e Instalações Elétricas</h4>
          <p className="text-sm opacity-80">Soluções em sistemas elétricos e automação em todo o Brasil.</p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-2">Diferenciais</h4>
          <ul className="text-sm opacity-80 space-y-1">
            <li>Qualidade e segurança</li>
            <li>Pontualidade</li>
            <li>Atendimento personalizado</li>
            <li>Suporte em finais de semana e feriados</li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-2">Contato</h4>
          <p className="text-sm opacity-80">Otimize seu consumo de energia e reduza custos.</p>
          <a href="/contato" className="btn btn-secondary mt-3">Fale Conosco</a>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="container py-4 text-xs opacity-70">© {new Date().getFullYear()} G.F.R - Todos os direitos reservados.</div>
      </div>
    </footer>
  )
}