import { Link } from 'react-router-dom'
import { useCart } from '../state/CartContext.jsx'

export default function Cart() {
  const { cartItems, updateItemQuantity, removeItem, cartTotal, clearCart } = useCart()

  if (cartItems.length === 0) {
    return (
      <div>
        <h2>Your cart is empty</h2>
        <p>
          <Link to="/">Browse products</Link>
        </p>
      </div>
    )
  }

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} style={styles.row}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <img src={item.image} alt={item.name} style={styles.thumbnail} />
            <div style={{ display: 'grid' }}>
              <strong>{item.name}</strong>
              <span style={{ color: '#6b7280' }}>${item.price.toFixed(2)}</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input
              type="number"
              min={0}
              value={item.quantity}
              onChange={(e) => updateItemQuantity(item.id, Number(e.target.value))}
              style={styles.qty}
            />
            <button onClick={() => removeItem(item.id)} style={styles.remove}>Remove</button>
          </div>
        </div>
      ))}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e5e7eb', paddingTop: 12 }}>
        <strong>Total: ${cartTotal.toFixed(2)}</strong>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={clearCart} style={styles.secondary}>Clear</button>
          <button style={styles.primary}>Checkout</button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 0',
    borderBottom: '1px solid #e5e7eb'
  },
  thumbnail: { width: 64, height: 64, objectFit: 'cover', borderRadius: 6 },
  qty: { width: 72, padding: 6, borderRadius: 6, border: '1px solid #d1d5db' },
  remove: { background: 'transparent', border: '1px solid #d1d5db', borderRadius: 6, padding: '6px 8px', cursor: 'pointer' },
  secondary: { background: 'transparent', border: '1px solid #d1d5db', borderRadius: 6, padding: '8px 10px', cursor: 'pointer' },
  primary: { background: '#111827', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 10px', cursor: 'pointer' }
}