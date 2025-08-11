import { NavLink, Link } from 'react-router-dom'
import { useCart } from '../state/CartContext.jsx'

export default function Navbar() {
  const { cartCount } = useCart()

  return (
    <header style={styles.header}>
      <Link to="/" style={styles.brand}>
        <span style={{ fontWeight: 800 }}>Shop</span>Lite
      </Link>
      <nav style={styles.nav}>
        <NavLink to="/" style={styles.link}>
          Home
        </NavLink>
        <NavLink to="/cart" style={styles.link}>
          Cart ({cartCount})
        </NavLink>
      </nav>
    </header>
  )
}

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 16px',
    borderBottom: '1px solid #e5e7eb',
    position: 'sticky',
    top: 0,
    background: '#fff',
    zIndex: 10
  },
  brand: { textDecoration: 'none', color: '#111827', fontSize: 20 },
  nav: { display: 'flex', gap: 12 },
  link: { textDecoration: 'none', color: '#374151' }
}