export default function Home() {
  return (
    <main>
      <section className="bg-[var(--color-neutral-2)]">
        <div className="container py-10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="font-heading text-3xl font-bold mb-3 text-[var(--color-primary)]">Soluções Elétricas e Automação</h1>
            <p className="text-slate-700 mb-4">Instalação, manutenção e análise de consumo em todo o Brasil.</p>
            <a href="/contato" className="btn btn-primary">Solicitar Orçamento</a>
          </div>
          <img src="/images/banner.png" alt="Banner" className="w-full rounded shadow" />
        </div>
      </section>
      <section>
        <div className="container py-10">
          <h2 className="font-heading text-2xl font-semibold mb-4 text-[var(--color-primary)]">Nossos Diferenciais</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="font-semibold">Expertise Técnica</h3>
              <p className="text-sm text-slate-700">Equipe qualificada e certificada.</p>
            </div>
            <div className="card">
              <h3 className="font-semibold">Pontualidade</h3>
              <p className="text-sm text-slate-700">Cumprimos prazos com eficiência.</p>
            </div>
            <div className="card">
              <h3 className="font-semibold">Atendimento Personalizado</h3>
              <p className="text-sm text-slate-700">Suporte inclusive em finais de semana e feriados.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Seção Quem Somos */}
      <section className="bg-white">
        <div className="container py-10 grid md:grid-cols-2 gap-6 items-center">
          <img src="/images/empresa.png" alt="Equipe G.F.R" className="w-full rounded shadow" />
          <div>
            <h2 className="font-heading text-2xl font-semibold mb-3 text-[var(--color-primary)]">Quem Somos</h2>
            <p className="text-slate-700 mb-4">A G.F.R é especializada em sistemas elétricos e automação, oferecendo soluções completas de instalação, manutenção e otimização de consumo energético em todo o Brasil.</p>
            <a href="/empresa" className="btn btn-ghost">Ler Mais</a>
          </div>
        </div>
      </section>
      {/* Seção Nossos Serviços */}
      <section className="bg-[var(--color-neutral-2)]">
        <div className="container py-10">
          <h2 className="font-heading text-2xl font-semibold mb-6 text-[var(--color-primary)]">Nossos Serviços</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="card">
              <h3 className="font-semibold">Instalações</h3>
              <p className="text-sm text-slate-700">Projetos e execução conforme normas técnicas.</p>
            </div>
            <div className="card">
              <h3 className="font-semibold">Manutenção</h3>
              <p className="text-sm text-slate-700">Preventiva e corretiva para máxima disponibilidade.</p>
            </div>
            <div className="card">
              <h3 className="font-semibold">Automação</h3>
              <p className="text-sm text-slate-700">Integração de sistemas para ganho de eficiência.</p>
            </div>
            <div className="card">
              <h3 className="font-semibold">Análise de Consumo</h3>
              <p className="text-sm text-slate-700">Diagnóstico e plano de redução de custos.</p>
            </div>
          </div>
          <a href="/serviços" className="btn btn-secondary mt-6 inline-block">Ver Todos os Serviços</a>
        </div>
      </section>
      {/* Seção Produtos e Soluções */}
      <section className="bg-white">
        <div className="container py-10">
          <h2 className="font-heading text-2xl font-semibold mb-6 text-[var(--color-primary)]">Produtos e Soluções</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="font-semibold">Painéis Elétricos</h3>
              <p className="text-sm text-slate-700">Quadros de comando e distribuição.</p>
            </div>
            <div className="card">
              <h3 className="font-semibold">Dispositivos de Proteção</h3>
              <p className="text-sm text-slate-700">Chaves, disjuntores e DPS.</p>
            </div>
            <div className="card">
              <h3 className="font-semibold">Automação</h3>
              <p className="text-sm text-slate-700">CLPs, sensores e integração.</p>
            </div>
          </div>
          <a href="/produtos" className="btn btn-secondary mt-6 inline-block">Ver Catálogo Completo</a>
        </div>
      </section>

      {/* Seção Perguntas Frequentes */}
      <section className="bg-white">
        <div className="container py-10">
          <h2 className="font-heading text-2xl font-semibold mb-6 text-[var(--color-primary)]">Perguntas Frequentes</h2>
          <div className="space-y-3">
            <details className="card">
              <summary className="cursor-pointer font-semibold">Vocês atendem em todo o Brasil?</summary>
              <p className="text-sm text-slate-700 mt-2">Sim. Atuamos nacionalmente com equipe própria e parceiros certificados.</p>
            </details>
            <details className="card">
              <summary className="cursor-pointer font-semibold">Quais normas técnicas vocês seguem?</summary>
              <p className="text-sm text-slate-700 mt-2">Seguimos ABNT, NR10 e melhores práticas internacionais.</p>
            </details>
            <details className="card">
              <summary className="cursor-pointer font-semibold">Vocês oferecem suporte em finais de semana?</summary>
              <p className="text-sm text-slate-700 mt-2">Sim, dispomos de atendimento dedicado inclusive em finais de semana e feriados.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Seção Orçamento Rápido */}
      <section className="bg-[var(--color-neutral-2)]">
        <div className="container py-10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="font-heading text-2xl font-semibold mb-3 text-[var(--color-primary)]">Solicite seu Orçamento Rápido</h2>
            <p className="text-slate-700 mb-4">Envie suas necessidades e retornaremos com uma proposta personalizada.</p>
            <a href="/contato" className="btn btn-primary">Solicitar Orçamento</a>
          </div>
          <img src="/images/banner.png" alt="Orçamento Rápido" className="w-full rounded shadow" />
        </div>
      </section>
    </main>
  )
}