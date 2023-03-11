import Navbar from "./navbar";
import "../styles/userlist.css"

import { useState,useEffect } from "react";
const UserList = () => {
    let [data,setData] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch("http://localhost:3000/users")
            let data = await response.json()
            setData(data)
        }
        fetchData()
    },[])

    let remove = (id) => {
        fetch(`http://localhost:3000/users/${id}`,{
            method : "DELETE"
        })
        alert("removed")


    }

    return ( 
           <div className="userlist">
            <Navbar/>
          <div className="lps">
            {data.map((x) => (
                <div className="kjh">
                    <h1 id="hj">{x.FirstName.slice(0,1)}</h1>
                    <h1> FirstName : {x.FirstName}</h1>
                    <h1>LastName : {x.LastName}</h1>
                    <h2>Email : {x.Email}</h2>
                    <h2>Contact : {x.Contact}</h2>
                    <button id="op" onClick={() => remove(x.id)}>Delete</button>
                </div>
            ))}
          </div>
           </div> 
     );
}
 
export default UserList;