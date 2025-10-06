export default function Contato() {
  return (
    <main className="container py-10">
      <h1 className="font-heading text-3xl font-bold mb-4 text-[var(--color-primary)]">Contato</h1>
      <form action="https://formspree.io/f/xyyljzqn" method="POST" className="grid gap-3 max-w-lg">
        <label className="label" htmlFor="nome">Nome</label>
        <input id="nome" name="nome" placeholder="Seu nome" className="input" required />
        <label className="label" htmlFor="email">Email</label>
        <input id="email" type="email" name="email" placeholder="Seu email" className="input" required />
        <label className="label" htmlFor="mensagem">Mensagem</label>
        <textarea id="mensagem" name="mensagem" placeholder="Escreva sua mensagem" className="input" rows={4} required />
        <button className="btn btn-secondary" type="submit">Enviar</button>
      </form>
    </main>
  )
}