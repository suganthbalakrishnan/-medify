import ProductCard from '../components/ProductCard.jsx'
import { products } from '../data/products.js'

export default function Home() {
  return (
    <div>
      <h2 style={{ margin: '16px 0' }}>Products</h2>
      <div style={styles.grid}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: 16
  }
}