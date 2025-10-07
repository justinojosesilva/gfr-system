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
            <p className="text-slate-700 mb-4">A G.F.R Serviços e Instalações Elétricas oferece soluções especializadas em sistemas elétricos e automação em todo o Brasil. Garantimos qualidade na instalação, manutenção e análise de consumo de energia elétrica. Nosso diferencial está na expertise técnica, pontualidade e atendimento personalizado, incluindo suporte em finais de semana e feriados. Entre em contato para otimizar seu consumo de energia e reduzir custos com nossos serviços e produtos elétricos de alta qualidade.</p>
            <a href="/empresa" className="btn btn-ghost">Ler Mais</a>
          </div>
        </div>
      </section>
      {/* Seção Nossos Serviços */}
      <section className="bg-[var(--color-neutral-2)]">
        <div className="container py-10">
          <h2 className="font-heading text-2xl font-semibold mb-6 text-[var(--color-primary)]">Nossos Serviços</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="font-semibold mb-2">Correção de Fator de Potência e Instalação de Bancos de Capacitores</h3>
              <p className="text-sm text-slate-700">A GFR System melhora a eficiência energética através da correção de fator de potência e instalação de bancos de capacitores, reduzindo custos e aumentando a eficiência dos sistemas elétricos. Oferecemos serviços completos, desde dimensionamento até instalação e suporte contínuo.</p>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-2">Instalação e Manutenção de Relés de Proteção</h3>
              <p className="text-sm text-slate-700">Especialização em instalação, upgrade, comissionamento e manutenção de relés de proteção, assegurando a segurança e eficiência do seu sistema elétrico. Nossos serviços garantem proteção contra falhas, atualização para modelos avançados e suporte contínuo.</p>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-2">Controle de Demanda de Energia Elétrica e Instalação de Controladores</h3>
              <p className="text-sm text-slate-700">Soluções especializadas em controle de demanda de energia, incluindo elaboração de projetos e instalação de controladores de demanda. Nossos serviços ajudam a reduzir custos e melhorar a eficiência energética, garantindo um consumo otimizado e evitando penalidades.</p>
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
              <img src="/images/produto_1.png" alt="Produtos para Gerenciamento de Energia Elétrica" className="w-full rounded h-80 object-cover" />
              <h3 className="font-semibold mb-2">Produtos para Gerenciamento de Energia Elétrica</h3>
              {/* <p className="text-sm text-slate-700">Quadros de comando e distribuição.</p> */}
            </div>
            <div className="card">
              <img src="/images/produto_2.png" alt="Analisadores Portáteis de Energia Elétrica" className="w-full rounded h-80 object-cover" />
              <h3 className="font-semibold mb-2">Analisadores Portáteis de Energia Elétrica</h3>
              {/* <p className="text-sm text-slate-700">Chaves, disjuntores e DPS.</p> */}
            </div>
            <div className="card">
              <img src="/images/produto_3.png" alt="Controladores de Demanda" className="w-full rounded h-80 object-cover" />
              <h3 className="font-semibold mb-2">Controladores de Demanda</h3>
              {/* <p className="text-sm text-slate-700">CLPs, sensores e integração.</p> */}
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
              <summary className="cursor-pointer font-semibold">Quais são os principais serviços oferecidos pela G.F.R?</summary>
              <p className="text-sm text-slate-700 mt-2">Oferecemos uma ampla gama de serviços, incluindo:</p>
              <ul className="text-sm text-slate-700 mt-2 ml-5 space-y-1">
                <li><strong>Manutenção e Reparos Elétricos</strong>: Garantimos o funcionamento seguro e eficiente dos sistemas elétricos.</li>
                <li><strong>Soluções Energéticas</strong>: Desenvolvemos estratégias para melhorar a eficiência energética e reduzir o consumo.</li>
                <li><strong>Infraestrutura Elétrica</strong>: Projetamos e implementamos redes elétricas robustas e seguras.</li>
                <li><strong>Sistemas de Energia</strong>: Oferecemos soluções completas para geração e distribuição de energia.</li>
              </ul>
            </details>
            <details className="card">
              <summary className="cursor-pointer font-semibold">Como a G.F.R se diferencia de outras empresas do setor?</summary>
              <p className="text-sm text-slate-700 mt-2">Nossa empresa se destaca pelo atendimento personalizado, com disponibilidade para finais de semana e feriados, e pela análise detalhada das faturas de energia para identificar desperdícios e erros. Além disso, oferecemos soluções ajustadas às necessidades específicas de cada cliente, independentemente do tamanho ou setor.</p>
            </details>
            <details className="card">
              <summary className="cursor-pointer font-semibold">Quais são os benefícios de contratar os serviços da G.F.R?</summary>
              <p className="text-sm text-slate-700 mt-2">Os principais benefícios incluem:</p>
              <ul className="text-sm text-slate-700 mt-2 ml-5 space-y-1">
                <li><strong>Eficiência Energética</strong>: Reduzimos o consumo e os custos com energia elétrica através de soluções personalizadas.</li>
                <li><strong>Segurança e Confiabilidade</strong>: Garantimos que seus sistemas elétricos funcionem de maneira segura e eficiente.</li>
                <li><strong>Inovação e Sustentabilidade</strong>: Utilizamos as mais recentes tecnologias para otimizar a eficiência e promover práticas sustentáveis.</li>
                <li><strong>Atendimento de Qualidade</strong>: Oferecemos um atendimento personalizado e suporte contínuo para atender às suas necessidades específicas.</li>
              </ul>
            </details>
            <details className="card">
              <summary className="cursor-pointer font-semibold">A G.F.R realiza atendimento em todo o Brasil?</summary>
              <p className="text-sm text-slate-700 mt-2">Sim, a G.F.R Serviços e Instalações Elétricas atende clientes em todo o território nacional. Independentemente da sua localização, nossa equipe está pronta para fornecer soluções eficazes e personalizadas para suas necessidades elétricas.</p>
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
            {/* <a href="/contato" className="btn btn-primary">Solicitar Orçamento</a> */}
          </div>
          <form action="https://formspree.io/f/xyyljzqn" method="POST" className="grid gap-3 bg-white p-4 rounded shadow">
            <label className="label" htmlFor="home-nome">Nome</label>
            <input id="home-nome" name="nome" className="input" placeholder="Seu nome" required />

            <label className="label" htmlFor="home-email">Email</label>
            <input id="home-email" type="email" name="email" className="input" placeholder="Seu email" required />

            <label className="label" htmlFor="home-telefone">Telefone</label>
            <input id="home-telefone" type="tel" name="telefone" className="input" placeholder="(DDD) 99999-9999" />

            <label className="label" htmlFor="home-assunto">Assunto</label>
            <input id="home-assunto" name="assunto" className="input" placeholder="Resumo do seu pedido" />

            <label className="label" htmlFor="home-detalhes">Detalhes</label>
            <textarea id="home-detalhes" name="detalhes" className="input" rows="4" placeholder="Explique brevemente sua necessidade" />

            <button type="submit" className="btn btn-primary mt-2">Solicitar Orçamento</button>
          </form>
        </div>
      </section>
    </main>
  )
}