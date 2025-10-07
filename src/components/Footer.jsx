import { SiFacebook, SiInstagram, SiYoutube, SiTiktok } from 'react-icons/si'
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}>
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
            <>
              <ul className="text-sm opacity-80 space-y-1">
                {/* <li className="flex items-center gap-2">
                  <FaPhone aria-label="Telefone" className="text-green-400" size={18} />
                  <span>(11) 9996-63140</span>
                </li> */}
                <li className="flex items-center gap-2">
                  <FaWhatsapp aria-label="WhatsApp" className="text-green-400" size={18} />
                  <span>(11) 99966-3140</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope aria-label="E-mail" className="text-green-400" size={18} />
                  <span>contato@gfrsystem.com.br</span>
                </li>
              </ul>
              <div className="flex items-center gap-3 mt-3">
                <a href="#" aria-label="Facebook" className="opacity-80 hover:opacity-100"><SiFacebook size={20} /></a>
                <a href="#" aria-label="Instagram" className="opacity-80 hover:opacity-100"><SiInstagram size={20} /></a>
                <a href="#" aria-label="YouTube" className="opacity-80 hover:opacity-100"><SiYoutube size={20} /></a>
                <a href="#" aria-label="TikTok" className="opacity-80 hover:opacity-100"><SiTiktok size={20} /></a>
              </div>
            </>
        </div>
      </div>
      <div className="container py-8">
        <strong>Avenida Engenheiro Luiz Carlos Berrini, 1681 sala 111 e 112 - Cidade Monções (Zona Sul), São Paulo - SP, 04571-011</strong>
      </div>
      <div className="border-t border-slate-800">
        <div className="container py-4 text-xs opacity-70">© {new Date().getFullYear()} G.F.R - Todos os direitos reservados.</div>
      </div>
    </footer>
  )
}