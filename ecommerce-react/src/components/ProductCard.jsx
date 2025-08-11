import { Link } from 'react-router-dom'
import { useCart } from '../state/CartContext.jsx'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div style={styles.card}>
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
        <img src={product.image} alt={product.name} style={styles.image} />
        <h3 style={styles.title}>{product.name}</h3>
      </Link>
      <div style={styles.row}>
        <span style={styles.price}>${product.price.toFixed(2)}</span>
        <button onClick={() => addItem(product, 1)} style={styles.button}>
          Add to cart
        </button>
      </div>
    </div>
  )
}

const styles = {
  card: {
    border: '1px solid #e5e7eb',
    borderRadius: 8,
    padding: 12,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    background: '#fff'
  },
  image: { width: '100%', height: 180, objectFit: 'cover', borderRadius: 6 },
  title: { margin: '8px 0 0 0', color: '#111827' },
  row: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  price: { fontWeight: 700 },
  button: {
    background: '#111827',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    padding: '8px 10px',
    cursor: 'pointer'
  }
}