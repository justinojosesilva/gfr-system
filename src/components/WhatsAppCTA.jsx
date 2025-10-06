export default function WhatsAppCTA() {
  const phone = '5599999999999' // placeholder
  const message = encodeURIComponent('Olá! Gostaria de falar com a G.F.R sobre soluções elétricas.')
  const href = `https://wa.me/${phone}?text=${message}`
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="pulse-5s fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg"
    >
      WhatsApp
    </a>
  )
}