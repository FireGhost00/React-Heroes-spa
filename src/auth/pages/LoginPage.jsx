import { useNavigate } from "react-router-dom";


export const LoginPage = () => {
  const navigate = useNavigate();
  const onLogin = ()=>{
    navigate('/Marvel', {
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
