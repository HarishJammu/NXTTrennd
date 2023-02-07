import Cookies from 'js-cookie'
import {Redirect,Route} from 'react-router-dom'

const ProtectedRoute=props=>{
    const nxtToken=Cookies.get('nxt_jwt')
    if (nxtToken===undefined){
        return <Redirect to="/login"/>
    }
    return<Route {...props}/>
}
export default ProtectedRoute