import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";


export const LoginPage = () => {


  const {login} = useContext(AuthContext)
  
  const navigate = useNavigate();
  const onLogin = ()=>{

 const lastPath = localStorage.getItem('lastPath') || '/';

    login('Nelson Gomez');
    navigate(lastPath, {
      replace: true
     });
  }
  return (
   <div>
    <h1>Login</h1>
    <hr/>
    <button className="container mt-5"
    onClick={onLogin}>
      Login
    </button>
   </div>
  )
}
