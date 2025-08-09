export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto max-w-6xl px-4 py-6 text-sm text-gray-600 flex justify-between">
        <span>© {new Date().getFullYear()} MySite</span>
        <span>Built with React + Tailwind</span>
      </div>
    </footer>
  )
}