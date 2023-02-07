import './index.css'

const ProductsHeaders=props=>{
  const {activeOptionId,sortByOption,updatedActiveOption}=props

  const onChangeSortby=event=>{
    updatedActiveOption(event.target.value)
  }

    return(<div className="products-header-background">
        <h1 className='Product-Head'>All Products</h1>
      <div className='selection-price'>
        <h1 className="price">Sort_by</h1>
        <select value={activeOptionId} onChange={onChangeSortby}>
            {sortByOption.map(eachOptions=>(
              <option value={eachOptions.optionId} key={eachOptions.optionsId}>{eachOptions.displayText}</option>
            ))}
            </select>
      </div>
    </div>)
}
export default ProductsHeaders