import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-gray-600 mb-6">Page not found.</p>
      <Link to="/" className="text-blue-600 hover:underline">Go home</Link>
    </section>
  )
}