import Header from '../Header'

import AllProducts from '../AllProducts'
import PrimeDealSection from '../PrimeDealSection'
import './index.css'

const Products = () => (
  <>
    <Header />
    <div className="products-container">
      <PrimeDealSection/>
      <AllProducts/>
      </div>
  </>
)

export default Products