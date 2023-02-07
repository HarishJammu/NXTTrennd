import { BsStarHalf } from "react-icons/bs";
import './index.css'

const ProductCard=props=>{
        const {productDetails}=props
        const {title,brand,price,imageUrl,rating}=productDetails

    return(
        <li className='background'>
                <img src={imageUrl}
                alt="avatar" className="image"/>
                <h1 className="brand-new">{brand}</h1>
                <p className="title-new">{title}</p>
                <div className="product-deta">
                    <p className='price'>RS:{price}/-</p>
                    <div className='rating'>
                       <p className='rate'>{rating}</p>
                       <BsStarHalf className="star-icon"/>
                    </div>
                </div>
                
            </li>
            
            
       
    )
}
    export default ProductCard

