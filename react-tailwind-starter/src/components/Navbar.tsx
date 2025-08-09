import { NavLink } from 'react-router-dom'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-md text-sm font-medium ${
    isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-blue-50'
  }`

export default function Navbar() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="text-lg font-semibold text-blue-700">
          MySite
        </NavLink>
        <nav className="flex items-center gap-2">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}