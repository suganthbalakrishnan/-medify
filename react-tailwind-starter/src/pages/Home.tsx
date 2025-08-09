export default function Home() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome</h1>
      <p className="text-gray-700">
        This is a minimal starter with React, Vite, TypeScript, Tailwind, and routing.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-lg border bg-white p-4">Card 1</div>
        <div className="rounded-lg border bg-white p-4">Card 2</div>
        <div className="rounded-lg border bg-white p-4">Card 3</div>
      </div>
    </section>
  )
}