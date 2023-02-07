import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class LoginForm extends Component {


    state={username:"",
            password:"",
          showError:false,
          errorMsg:''
        }
            onChangeUsername=event=>{
              this.setState({username:event.target.value})
            }
            onChangePassword=event=>{
              this.setState({password:event.target.value})
            }
            onSubmitSuccess=jwtToken=>{
                  Cookies.set('nxt_jwt',jwtToken,{expires:30})
                  const {history}=this.props
                  history.replace('/')
            }
            onSubmitFailure=errorMsg=>{
              this.setState({errorMsg,showError:true})
            }

            onSubmitForm=async event=>{
              event.preventDefault()
              const{username,password}=this.state
              const userDetails={username,password}
              const url="https://apis.ccbp.in/login"
             const options={
              method:"POST",
              body:JSON.stringify(userDetails)
             }
              const resposne=await fetch(url,options)
              const data=await resposne.json()
              if (resposne.ok===true){
                this.onSubmitSuccess(data.jwt_token)
              }else if(resposne.status===401){
                this.onSubmitFailure(data.error_msg)
              }
            }
            render(){
              const {username,password,showError,errorMsg}=this.state
              const NXTToken=Cookies.get("nxt_jwt")
              if(NXTToken!==undefined){
                return <Redirect to='/'/>
              }
              return(
                <div className='loginBackground'>

                  <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1669534150~exp=1669534750~hmac=05e589e288ee315015c17bba61f76b1d45ea01ccfb358fd130c68ec6657591c7" 
                  alt="avatar" className="avatar"/>
                  <form className='form-background' onSubmit={this.onSubmitForm}>
                    <label className="label-for-login" htmlFor="username">
                      UserName
                    </label>
                    <input type="text" id="username" alt="userName" className="input-login" value={username} onChange={this.onChangeUsername}/>
                    <label className="label-for-login" htmlFor="password">
                    Password
                    </label>
                    <input type="password" id="password" alt="password" className="input-login" value={password} onChange={this.onChangePassword}/>
                    <div className="button-container">
                      <button className="button" type="submit">Login</button>
                      <p>{showError&&<p>*{errorMsg}</p>}</p>
                    </div>
                  </form>
                  
                </div>
              )
            }
}
export default LoginForm