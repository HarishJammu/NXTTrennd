import Loader from  'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {Component} from 'react'
import Cookies from 'js-cookie'
import ProductCard from '../ProductCard'
import './index.css'

const apiConstants={intial:"INTIAL",
                    success:'SUCCESS',
                    failure:"FAILURE",
                    inProcess:"IN_PROCESS"}

class PrimeDealSection extends Component{
    state={primeDeals:[],apiStaus:apiConstants.intial}

    componentDidMount(){
        this.getPrimeDealsProducts()
    }

    getPrimeDealsProducts=async()=>{
        this.setState({apiStaus:apiConstants.inProcess})

        
        const jwtToken=Cookies.get('nxt_jwt')
        const apiUrl='https://apis.ccbp.in/prime-deals'
        const options={
            method:'GET',
            headers: {
                Authorization: `Bearer ${jwtToken}`,
              }
        }
        const response=await fetch(apiUrl,options)
        if (response.ok===true){
            const fetchingData=await response.json()
            const upDatePrimeData=fetchingData.prime_deals.map(eachPrime=>({
                title: eachPrime.title,
                brand: eachPrime.brand,
                price: eachPrime.price,
                id: eachPrime.id,
                imageUrl: eachPrime.image_url,
                rating: eachPrime.rating,
            }))
            this.setState({primeDeals:upDatePrimeData,apiStaus:apiConstants.success})

        }else if (response.status===401){
                this.setState({apiStaus:apiConstants.failure})
        }
       

    }

    onSuccessFulApi=()=>{
        const {primeDeals}=this.state
        return( <div className="primeDeals-back">
        <h1 className="Product-Head">Prime Deals Section</h1>
        <ul className="unOrder-list">{primeDeals.map((eachOne)=>(
                <ProductCard productDetails={eachOne} key={eachOne.id}/>
            ))}</ul>
            
    </div>)

        
    }

    onFailureApi=()=>{
        <img
      src="https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png"
      alt="Register Prime"
      className="register-prime-image"
    />
    }


    loading=()=>{
        <Loader type="BallTriangle" height={50} width={50} color="00BFFF"/> 
      
    }


    render(){
        const {apiStaus}=this.state
       switch(apiStaus){
        case(apiConstants.success):
            return this.onSuccessFulApi()
            
        case(apiConstants.failure):
        return this.onFailureApi()
        
        case (apiConstants.inProcess):
            return this.loading()
            
            default:
                return null
                
            
       }

    }
}
export default PrimeDealSection
