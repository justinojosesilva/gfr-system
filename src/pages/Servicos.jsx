import { useState } from 'react'

const TABS = [
  { key: 'afericoes', label: 'Aferição de Medidores de Energia Elétrica' },
  { key: 'controle', label: 'Controle de Demanda de Energia Elétrica e Instalação de Controladores' },
  { key: 'correcao', label: 'Correção de Fator de Potência e Instalação de Bancos de Capacitores' },
  { key: 'deteccao', label: 'Detecção de Desvios e Erros de Medição de Energia Elétrica' },
  { key: 'implantacao', label: 'Implantação e Manutenção de Sistemas de Energia Elétrica' },
  { key: 'instalacao', label: 'Instalação e Manutenção de Medidores de Energia Elétrica' },
  { key: 'manutencao', label: 'Instalação e Manutenção de Relés de Proteção' },
]

const CONTENT = {
  afericoes: {
    title: 'Aferição de Medidores de Energia Elétrica',
    subtitle: 'Precisão Garantida com GFR System: Aferição de Medidores de Energia Elétrica com Emissão de Laudo.',
    description:
      'A GFR System oferece serviços especializados de aferição em campo para medidores de energia elétrica, com emissão de laudo de aferição. Nossos serviços asseguram que seus medidores forneçam medições precisas e confiáveis, essenciais para uma gestão energética eficiente e conforme regulamentações.',
    services: [
      {
        title: 'Nossos Serviços',
        items: [
          'Aferição de Medidores de Energia Elétrica: Realizamos testes e ajustes em campo para verificar e calibrar medidores, assegurando que estejam medindo com precisão.',
          'Emissão de Laudo Técnico: Após a aferição, emitimos um laudo técnico detalhado, documentando a precisão dos medidores e quaisquer ajustes realizados.',
        ],
      },
      {
        title: 'Benefícios dos Nossos Serviços',
        items: [
          'Precisão Aumentada: Garantimos que seus medidores estejam funcionando corretamente e fornecendo dados exatos, o que é crucial para a correta cobrança e gestão de energia.',
          'Conformidade Regulatória: Nossos laudos técnicos atendem às normas e regulamentações vigentes, assegurando que seus medidores estejam em conformidade.',
          'Confiança e Transparência: Com laudos detalhados, você tem a garantia de que a medição está precisa, promovendo confiança e transparência em suas operações energéticas.',
        ],
      },
      {
        title: 'Como Funciona?',
        items: [
          'Inspeção Inicial: Realizamos uma avaliação inicial dos medidores para identificar necessidades de aferição.',
          'Aferição em Campo: Executamos a aferição dos medidores diretamente no local, ajustando e calibrando conforme necessário.',
          'Laudo Técnico: Emitimos um laudo técnico detalhado, documentando o estado dos medidores e quaisquer correções realizadas.',
        ],
      },
    ],
    footer: {
      title: 'Entre em Contato',
      description: 'Para garantir medições precisas e conforme as normas, entre em contato com a GFR System. Nossa equipe de especialistas está pronta para fornecer serviços de aferição de medidores de energia elétrica e laudos técnicos detalhados.',
    }
     
  },
  controle: {
    title: 'Controle de Demanda de Energia Elétrica e Instalação de Controladores',
    subtitle: 'Otimize seu Consumo Energético com GFR System: Controle de Demanda e Instalação de Controladores de Demanda',
    description:
      'A GFR System é especializada em controle de demanda de energia elétrica, elaboração de projetos, montagem e instalação de controladores de demanda. Nossos serviços são projetados para ajudar sua empresa a gerenciar eficientemente o consumo de energia, reduzir custos e melhorar a eficiência operacional.',
   services: [
      {
        title: 'Serviços Oferecidos',
        items: [
          'Controle de Demanda de Energia Elétrica: Implementamos soluções para monitorar e controlar o consumo de energia, evitando picos de demanda e penalidades associadas.',
          'Elaboração de Projetos: Desenvolvemos projetos detalhados para a instalação de controladores de demanda, adaptados às necessidades específicas do seu sistema elétrico.',
          'Montagem e Instalação: Realizamos a montagem e instalação dos controladores de demanda com precisão, garantindo operação eficiente e conformidade com normas de segurança.',
        ],
      },
      {
        title: 'Benefícios dos Nossos Serviços',
        items: [
          'Redução de Custos: Ao controlar a demanda de energia, você evita multas por excesso de consumo e reduz suas despesas com eletricidade.',
          'Eficiência Energética: Com a instalação de controladores de demanda, seu sistema de energia opera de maneira mais eficiente, evitando desperdícios e maximizando o uso de energia.',
          'Melhor Planejamento: Nossos projetos proporcionam um planejamento detalhado e uma instalação adequada, garantindo a eficácia e a longevidade do sistema.',
        ],
      },
      {
        title: 'Como Funciona?',
        items: [
          'Análise Inicial: Avaliamos o consumo de energia da sua empresa para identificar picos e padrões de demanda.',
          'Projeto e Planejamento: Criamos um projeto personalizado para a instalação dos controladores de demanda, assegurando que atenda às suas necessidades específicas.',
          'Instalação e Suporte: Instalamos os controladores e oferecemos suporte contínuo para garantir que o sistema funcione de maneira eficiente e eficaz.',
        ],
      },
    ],
    footer: {
      title: 'Entre em Contato',
      description: 'Para otimizar o controle de demanda de energia elétrica da sua empresa e reduzir custos, entre em contato com a GFR System. Nossos especialistas estão prontos para fornecer soluções sob medida que atendam às suas necessidades energéticas.',
    }
  },
  correcao: {
    title: 'Correção de Fator de Potência e Instalação de Bancos de Capacitores',
    subtitle: 'Melhore a Eficiência Energética com GFR System: Correção de Fator de Potência e Instalação de Bancos de Capacitores',
    description:
      'A GFR System é especializada em correção de fator de potência, dimensionamento, elaboração de projetos, montagem e instalação de bancos de capacitores. Nossos serviços são projetados para otimizar o desempenho energético da sua empresa e reduzir custos com energia.',
    services: [
      {
        title: 'Serviços Oferecidos',
        items: [
          'Correção de Fator de Potência: Ajustamos o fator de potência do seu sistema elétrico para melhorar a eficiência e reduzir penalidades em sua conta de energia.',
          'Dimensionamento Personalizado: Realizamos um dimensionamento preciso para garantir que o banco de capacitores atenda às suas necessidades específicas de carga.',
          'Elaboração de Projeto: Desenvolvemos projetos detalhados que incluem todos os aspectos técnicos e operacionais necessários para a instalação eficaz dos bancos de capacitores.',
          'Montagem e Instalação: Executamos a montagem e instalação dos bancos de capacitores com precisão e conforme as melhores práticas, assegurando uma operação segura e eficiente.',
        ],
      },
      {
        title: 'Benefícios dos Nossos Serviços',
        items: [
          'Redução de Custos: Melhore o fator de potência e evite multas por baixa eficiência energética, resultando em economia significativa.',
          'Aumento da Eficiência: Com a instalação adequada, seu sistema elétrico funcionará de maneira mais eficiente, aumentando a vida útil dos equipamentos.',
          'Compliance e Qualidade: Nossos projetos atendem às normas e regulamentos vigentes, garantindo a conformidade e segurança do sistema.',
        ],
      },
      {
        title: 'Como Funciona?',
        items: [
          'Avaliação Inicial: Realizamos uma análise detalhada do seu sistema elétrico para identificar as necessidades de correção e dimensionamento.',
          'Projeto e Planejamento: Desenvolvemos um projeto sob medida e planejamos a montagem e instalação para atender às suas especificações.',
          'Instalação e Suporte: Instalamos o banco de capacitores e oferecemos suporte contínuo para assegurar o desempenho ideal e a durabilidade do sistema.',
        ],
      },
    ],
    footer: {
      title: 'Entre em Contato',
      description: 'Para otimizar a eficiência energética da sua empresa, entre em contato com a GFR System. Nossa expertise em correção de fator de potência e instalação de bancos de capacitores garantirá que você maximize os benefícios e reduza seus custos energéticos.',
    }
  },
  deteccao: {
    title: 'Detecção de Desvios e Erros de Medição de Energia Elétrica',
    subtitle: 'GFR System: Detecção e Correção de Desvios e Erros de Medição de Energia Elétrica',
    description:
      'A GFR System oferece serviços especializados em detecção de desvios e erros de medição de energia elétrica, especialmente voltados para questões identificadas por concessionárias. Nosso objetivo é garantir a precisão das medições e resolver problemas que possam afetar a confiabilidade dos dados energéticos.',
    services: [
      {
        title: 'Nossos Serviços',
        items: [
          'Detecção de Desvios de Medição: Analisamos e identificamos desvios nos medidores de energia elétrica que podem indicar problemas de precisão ou falhas operacionais.',
          'Identificação de Erros de Medição: Investigamos erros nos dados de medição, realizando diagnósticos detalhados para identificar as causas e propor soluções eficazes.',
          'Correção e Ajustes: Proporcionamos soluções para corrigir desvios e erros, ajustando ou substituindo componentes conforme necessário para restaurar a precisão.',
        ],
      },
      {
        title: 'Benefícios dos Nossos Serviços',
        items: [
          'Precisão dos Dados: Asseguramos que as medições de energia elétrica estejam corretas, evitando erros que possam levar a cobranças indevidas ou problemas operacionais.',
          'Eficiência Energética: Corrigindo desvios e erros, você melhora a eficiência do sistema elétrico e evita desperdícios de energia.',
          'Conformidade e Confiabilidade: Nossos serviços garantem que os medidores estejam em conformidade com as normas e operem de maneira confiável, promovendo uma gestão energética precisa.',
        ],
      },
      {
        title: 'Como Funciona?',
        items: [
          'Avaliação Inicial: Realizamos uma análise preliminar para identificar possíveis desvios e erros nos medidores de energia elétrica.',
          'Detecção e Diagnóstico: Utilizamos técnicas avançadas para detectar e diagnosticar problemas de medição com precisão.',
          'Correção e Ajustes: Implementamos as correções necessárias e ajustamos os medidores para restaurar a precisão e eficiência.',
        ],
      },
    ],
    footer: {
      title: 'Entre em Contato',
      description: 'Para garantir medições precisas e resolver problemas de medição de energia elétrica, entre em contato com a GFR System. Nossa equipe especializada está pronta para fornecer soluções eficazes e assegurar a precisão dos seus dados energéticos.',
    }
  },
  implantacao: {
    title: 'Implantação e Manutenção de Sistemas de Energia Elétrica',
    subtitle: 'Maximize a Eficiência Energética com GFR System: Implantação, Operação e Manutenção de Sistemas de Gestão de Energia Elétrica',
    description:
      'Se você busca otimizar o gerenciamento e controle da sua energia elétrica, a GFR System é a solução ideal. Nosso serviço especializado em implantação, operação e manutenção de sistemas para gerenciamento, controle e análise de energia elétrica garante que sua empresa alcance a máxima eficiência e controle sobre o consumo energético.',
    services: [
      {
        title: 'Por que Escolher a GFR System?',
        items: [
          'Implantação Eficiente: Na GFR System, iniciamos com uma análise detalhada das suas necessidades energéticas. Desenvolvemos e implementamos soluções personalizadas que asseguram um controle preciso e eficiente da sua energia.',
          'Operação Especializada: Oferecemos suporte contínuo para a operação dos sistemas implantados, garantindo que todas as funcionalidades sejam plenamente aproveitadas e que sua gestão de energia seja otimizada.',
          'Manutenção Proativa: Realizamos manutenção preventiva e corretiva para evitar problemas e garantir que o sistema continue funcionando com a máxima eficiência. Nossa abordagem proativa assegura a longevidade e a performance superior do seu sistema.',
        ],
      },
      {
        title: 'Benefícios com a GFR System',
        items: [
          'Redução de Custos: Com um gerenciamento adequado proporcionado pela GFR System, você reduz o desperdício e economiza nos custos com energia elétrica.',
          'Controle Total: Tenha controle completo sobre o consumo de energia, possibilitando ajustes em tempo real e decisões informadas.',
          'Análise Avançada: Nossos sistemas oferecem relatórios detalhados e análises precisas, permitindo melhorar continuamente suas estratégias de energia.',
        ],
      },
      {
        title: 'Como Funciona?',
        items: [
          'Consultoria Inicial: Avaliamos suas necessidades específicas e desenvolvemos um plano de implantação personalizado, alinhado com a expertise da GFR System.',
          'Implementação do Sistema: Instalamos e configuramos o sistema conforme o planejamento, garantindo uma integração eficiente com suas operações existentes.',
          'Suporte e Manutenção: Após a instalação, a GFR System oferece suporte contínuo e manutenção para manter o sistema operando com eficiência máxima.',
        ],
      },
    ],
    footer: {
      title: 'Entre em Contato com a GFR System',
      description: 'Não deixe a gestão da sua energia elétrica ao acaso. Entre em contato com a GFR System hoje mesmo para descobrir como podemos transformar o gerenciamento de energia da sua empresa. Com nossa expertise, você garante um futuro mais eficiente e sustentável.',
    }
  },
  instalacao: {
    title: 'Instalação e Manutenção de Medidores de Energia Elétrica',
    subtitle: 'Especialistas em Medidores de Energia Elétrica: Instalação, Upgrade, Comissionamento e Manutenção com GFR System',
    description:
      'A GFR System oferece serviços completos para medidores de energia elétrica, incluindo instalação, upgrade, comissionamento e manutenção de todos os modelos e fabricantes. Nossos serviços garantem precisão na medição e operação eficiente dos sistemas de monitoramento de energia.',
    services: [
      {
        title: 'Nossos Serviços',
        items: [
          'Instalação de Medidores de Energia Elétrica: Realizamos a instalação de medidores com precisão, assegurando que estejam corretamente configurados e em pleno funcionamento desde o início.',
          'Upgrade de Medidores: Atualizamos medidores existentes para modelos mais modernos, proporcionando recursos avançados e maior eficiência na medição.',
          'Comissionamento de Medidores: Verificamos e calibramos medidores para garantir que estejam funcionando conforme as especificações e padrões técnicos, assegurando medições precisas.',
          'Manutenção de Medidores: Oferecemos manutenção preventiva e corretiva para todos os tipos de medidores, garantindo que continuem operando com a máxima precisão e eficiência.',
        ],
      },
      {
        title: 'Benefícios dos Nossos Serviços',
        items: [
          'Precisão de Medição: Asseguramos medições exatas para evitar erros e otimizar o controle do consumo energético.',
          'Eficiência Operacional: Nossos serviços de upgrade e manutenção garantem que seus medidores estejam sempre atualizados e funcionando perfeitamente.',
          'Economia e Confiabilidade: Com a manutenção adequada, você prolonga a vida útil dos medidores e reduz custos com reparos inesperados.',
        ],
      },
      {
        title: 'Como Funciona?',
        items: [
          'Análise e Planejamento: Avaliamos suas necessidades e o estado atual dos medidores para desenvolver um plano de instalação ou upgrade.',
          'Execução dos Serviços: Realizamos a instalação, upgrade ou comissionamento conforme o plano, garantindo a conformidade com todos os padrões técnicos.',
          'Suporte Contínuo: Oferecemos manutenção e suporte contínuos para assegurar a longevidade e precisão dos medidores instalados.',
        ],
      },
    ],
    footer: {
      title: 'Entre em Contato',
      description: 'Para garantir a precisão e eficiência dos medidores de energia elétrica da sua empresa, entre em contato com a GFR System. Nossa equipe está pronta para oferecer soluções completas e de alta qualidade para todas as suas necessidades de medição.',
    }
  },  
  manutencao: {
    title: 'Instalação e Manutenção de Relés de Proteção',
    subtitle: 'GFR System: Instalação, Upgrade, Comissionamento e Manutenção de Relés de Proteção',
    description:
      'A GFR System é especializada em instalação, upgrade, comissionamento e manutenção de relés de proteção. Nossos serviços asseguram a segurança e a eficiência do seu sistema elétrico, garantindo proteção adequada contra falhas e sobrecargas.',
    services: [
      {
        title: 'Nossos Serviços',
        items: [
          'Instalação de Relés de Proteção: Realizamos a instalação de relés de proteção com precisão, garantindo que sejam configurados para oferecer o máximo de segurança ao seu sistema elétrico.',
          'Upgrade de Relés: Atualizamos seus relés de proteção para modelos mais avançados, proporcionando maior confiabilidade e melhores funcionalidades.',
          'Comissionamento de Relés: Verificamos e calibramos relés para assegurar que estejam operando conforme as especificações e exigências técnicas, garantindo proteção eficiente.',
          'Manutenção de Relés: Oferecemos manutenção preventiva e corretiva para relés de proteção, garantindo seu funcionamento ideal e prolongando sua vida útil.',
        ],
      },
      {
        title: 'Benefícios dos Nossos Serviços',
        items: [
          'Segurança Garantida: Proteja seu sistema elétrico contra falhas e sobrecargas com relés de proteção corretamente instalados e mantidos.',
          'Eficiência Operacional: A atualização e manutenção contínua garantem que seus relés operem com a máxima eficiência e confiabilidade.',
          'Redução de Riscos: Com relés bem calibrados e em perfeito estado, você minimiza os riscos de falhas e interrupções no fornecimento de energia.',
        ],
      },
      {
        title: 'Como Funciona?',
        items: [
          'Análise Inicial: Avaliamos suas necessidades e o estado atual dos relés para desenvolver um plano adequado de instalação ou upgrade.',
          'Execução dos Serviços: Instalamos, atualizamos ou comissionamos os relés conforme o planejamento, assegurando conformidade com todos os padrões técnicos.',
          'Suporte e Manutenção: Oferecemos suporte contínuo e serviços de manutenção para garantir que os relés mantenham sua eficácia ao longo do tempo.',
        ],
      },
    ],
    footer: {
      title: 'Entre em Contato',
      description: 'Para garantir a proteção e eficiência do seu sistema elétrico, entre em contato com a GFR System. Nossa equipe especializada está pronta para oferecer soluções completas para todas as suas necessidades de relés de proteção.',
    }
  },  
}

export default function Servicos() {
  const [active, setActive] = useState(TABS[0].key)

  return (
    <main className="container py-10">
      <h1 className="font-heading text-3xl font-bold mb-6 text-[var(--color-primary)]">Serviços</h1>
      <div className="grid md:grid-cols-4 gap-6">
        <aside className="md:col-span-1">
          <nav role="tablist" aria-orientation="vertical" className="space-y-2">
            {TABS.map((tab) => {
              const selected = active === tab.key
              return (
                <button
                  key={tab.key}
                  id={`tab-${tab.key}`}
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`panel-${tab.key}`}
                  onClick={() => setActive(tab.key)}
                  className={
                    `w-full text-left p-3 rounded border transition ` +
                    (selected
                      ? 'bg-white text-[var(--color-primary)] font-semibold border-l-4 border-[var(--color-accent)]'
                      : 'hover:bg-white hover:text-[var(--color-primary)]')
                  }
                >
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </aside>

        <section className="md:col-span-3">
          <div
            role="tabpanel"
            id={`panel-${active}`}
            aria-labelledby={`tab-${active}`}
            className="card"
          >
            <h2 className="font-heading text-3xl font-semibold mb-3 text-[var(--color-primary)]">
              {CONTENT[active].title}
            </h2>
            <h3 className="text-xl font-semibold text-slate-700 mb-4">{CONTENT[active].subtitle}</h3>
            <p className="text-slate-700 mb-4">{CONTENT[active].description}</p>
            {CONTENT[active].services.map((service) => (
              <div key={service.title}>
                <h4 className="font-heading text-xl font-semibold mb-3 mt-10 text-[var(--color-primary)]">
                  {service.title}
                </h4>
                <ul className="list-disc pl-5 text-slate-700 space-y-1">
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                </ul>
              </div>
            ))}

            <h2 className="font-heading text-xl font-semibold mb-5 mt-10 text-[var(--color-primary)]">
              {CONTENT[active].footer.title}
            </h2>
            <p className="text-slate-700 mb-4">
              {CONTENT[active].footer.description}
            </p>
            <a href="/contato" className="btn btn-primary mt-4 inline-block">Solicitar Orçamento</a>
          </div>
        </section>
      </div>
    </main>
  )
}