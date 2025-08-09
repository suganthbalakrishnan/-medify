export default function Contact() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <form className="max-w-md space-y-3">
        <input className="w-full rounded border px-3 py-2" placeholder="Your name" />
        <input className="w-full rounded border px-3 py-2" placeholder="Email" type="email" />
        <textarea className="w-full rounded border px-3 py-2" rows={4} placeholder="Message" />
        <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Send
        </button>
      </form>
    </section>
  )
}