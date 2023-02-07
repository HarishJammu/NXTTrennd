import {Link,withRouter} from "react-router-dom"
import Cookies from 'js-cookie'
import "./index.css"

const Header=props=>{
  const {history}=props
  const onClickeDelete=()=>{
      Cookies.remove("nxt_jwt")
      history.replace('/login')
  }

  return(
  <div className="header-cantainer">
   <div className="nav-content"> <img 
    src="https://img.freepik.com/free-vector/detailed-click-collect-sign_23-2148779338.jpg?w=740&t=st=1668140494~exp=1668141094~hmac=68acac5aadcba29b85e8bb27e32cdc5f789c42fc3f0371ce6d50f47246557021" 
    alt="avatar" className="image-icon"/>  
    <ul className="unorder-list">


     <li className="list-item"> 
   <Link to="/"> Home</Link> 
     </li>
      <li className="list-item">
      <Link to="/product">Products</Link> 
        </li>
      <li className="list-item">
       <Link to="/cart">Cart</Link>
        </li>
     
    </ul>
    <button type="button" className="button" onClick={onClickeDelete} >logOut</button>
    
    </div>
    
  </div>
)}
export default withRouter(Header)