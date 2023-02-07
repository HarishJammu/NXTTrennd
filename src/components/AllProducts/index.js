import { Component} from "react";
import Cookies from 'js-cookie'

import ProductCard from '../ProductCard'
import ProductsHeaders from '../ProductsHeaders'
import './index.css'


const sortByOption=[
        {optionId:"PRICE_LOW",
        displayText:"Low-To-High"},{
            optionId:"PRICE_HIGH",
            displayText:"High-To-Low"
                },]


class AllProducts extends Component{
    state={productList:[],
    activeOptionId:sortByOption[0].optionId}

 
     componentDidMount(){
        this.getProductsFromApi()
     }

     getProductsFromApi=async()=>{
        const {activeOptionId}=this.state
        const jwtToken=Cookies.get("nxt_jwt")
        const apiUrl= `https://apis.ccbp.in/products?sort_by=${activeOptionId}`
        const Options={
            method:"GET",
            headers: {
                Authorization: `Bearer ${jwtToken}`,
              },

        }
        const response=await fetch(apiUrl,Options)
        if (response.ok===true){
            const data=await response.json()
            const upDateData=data.products.map(eachProduct=>({
                title: eachProduct.title,
                brand: eachProduct.brand,
                price: eachProduct.price,
                id: eachProduct.id,
                imageUrl: eachProduct.image_url,
                rating: eachProduct.rating,
            }))
            this.setState({productList:upDateData})
        }
     }
     updatedActiveOption=activeOptionId=>{
        this.setState({activeOptionId:activeOptionId},this.getProductsFromApi)
     }

    render(){
        const {productList,activeOptionId}=this.state
        return(
            <div className="background">
                <ProductsHeaders 
                sortByOption={sortByOption}
                activeOptionId={activeOptionId}
                updatedActiveOption={this.updatedActiveOption}
                />
                <ul className="unOrder-list">
            {productList.map((eachItem)=>(
            <ProductCard 
            productDetails={eachItem}
             key={eachItem.id}
             updatedActiveOption={this.updatedActiveOption} 
             />))}
            
        </ul></div>
            
            
        )
    }
}
export default AllProducts

