import Navbar from "./navbar";
import { useRef } from "react";
import "../styles/addusers.css"
import { useNavigate } from "react-router-dom";

const AddUsers = () => {
     let firstName = useRef(null)
     let lastName = useRef(null)
     let email = useRef(null)
     let contact = useRef(null)

  
   let navigate = useNavigate()
     let addUser = (e) => {
        e.preventDefault();
        let FirstName = firstName.current.value
        let LastName = lastName.current.value
        let Email = email.current.value
        let Contact = contact.current.value
        let data = {FirstName,LastName,Email,Contact}
        console.log(data);
        fetch("http://localhost:3000/users",{
        method :"POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(data)
     })
     alert("success")
     navigate("/add-list")

     }

    return (
        <div className="adduser">
            <Navbar />
            <div className="luv">
                <div className="kiu">
                    <h1 id="re">Input Form <br /> for User's</h1>
                    <div className="we"></div>
                </div>
                <div className="porm">
                    <div className="juty">
                        <form action="" onSubmit={addUser}>
                            <h1 id="ter">Get in touch</h1>
                            <br />
                            <br />
                            <div className="tit">
                                <label htmlFor="">FirstName :  </label>
                <input ref={firstName} type="text" />
                                <label htmlFor="">LastName : </label>
                                <input ref={lastName} type="text" />
                            </div>
                            <br />
                            <div className="email">
                                <label htmlFor="">Email : </label>
                                <input ref={email} type="email" />
                            </div>
                            <br />
                            <div className="con">
                                <label htmlFor="">Contact : </label>
                                <input ref={contact} type="number" />
                            </div>
                            <br />
                            <br />
                            <button id="had">Submit</button>
                        </form>

                    </div>
                </div>
            </div>





        </div>
    );
}

export default AddUsers;