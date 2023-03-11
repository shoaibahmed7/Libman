import { useState } from "react";
import "../styles/login.css"
import { useNavigate } from "react-router-dom";

const Login = () => {
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    
    let navigate = useNavigate();

    let submit = (e) => {
        e.preventDefault();
        // let data =  {email,password}
        if (email == "admin@gmail.com" && password == 123) {
            navigate("/ad   ")
        } else {
            alert("invalid credentials")
        }

    }

    return ( 
        <div className="login">
            <div className="img">
                <img src={"images/jan"} alt="" />
            </div>
            <div className="login_form">
                <form action="" onSubmit={submit}>
                    <div className="heading">
                        <h1>LOGIN</h1>
                    </div>
                    <div className="email">
                        <label htmlFor="">Email : </label>
                    <input type="email" placeholder="enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <br />
                    <div className="pass">
                        <label htmlFor="">Password : </label>
                    <input type="password" placeholder="enter your password" value={password} onChange={(f) => setPassword(f.target.value)} />
                    </div>
                    <br />

                    <button id="min" type="submit">Login</button>
                </form>
            </div>
        </div>
     );
}
 
export default Login;