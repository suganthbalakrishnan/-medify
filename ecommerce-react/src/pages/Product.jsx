import { useParams } from 'react-router-dom'
import { products } from '../data/products.js'
import { useCart } from '../state/CartContext.jsx'

export default function Product() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()

  if (!product) {
    return <p>Product not found.</p>
  }

  return (
    <div style={styles.wrap}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <h2>{product.name}</h2>
        <p style={{ color: '#4b5563' }}>{product.description}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontWeight: 700, fontSize: 18 }}>${product.price.toFixed(2)}</span>
          <button onClick={() => addItem(product, 1)} style={styles.button}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  wrap: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'start' },
  image: { width: '100%', maxWidth: 560, borderRadius: 8 },
  button: { background: '#111827', color: '#fff', border: 'none', borderRadius: 6, padding: '10px 12px', cursor: 'pointer' }
}