import Navbar from "./navbar";
import "../styles/addbook.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddBook = () => {
    let [title,setTitle] = useState("")
    let [pageCount,setPageCount] = useState("")
    let [author,setAuthor] = useState("")
    let [category,setCategory] = useState("")
    let [description,setDescription] = useState("")
    let [imageUrl,setImageUrl] = useState("")
let navigate = useNavigate()
    let handleSubmit = (s) => {
        s.preventDefault()
        let data = {title,pageCount,author,category,description,imageUrl}
        console.log(data);
        fetch("http://localhost:3000/books",{
            method :"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        alert("success")
        navigate("/book-list")

    }
    return ( 
        <div className="addbook">
            <Navbar/>
                 <div className="enn">
                 <div className="kiu">
                <h1 id="er">Registration Form <br /> for Adding Book's</h1>
                <div className="un"></div>
                </div>
                <div className="gorm">
                <div className="form">
                   <form action="" onSubmit={handleSubmit}>
                    <h1 id="fer">Registration Form</h1>
                    <br />
                    <div className="tit">
                        <label htmlFor="">Title :  </label>
                        <input type="text" value={title} onChange={(a) =>setTitle(a.target.value)} />
                    </div>
                    <br />
                    <div className="pag">
                        <label htmlFor="">PageCount : </label>
                        <input type="text" value={pageCount} onChange={(b) =>setPageCount(b.target.value)}/>
                    </div>
                    <br />
                    <div className="aut">
                        <label htmlFor="">Author : </label>
                        <input type="text" value={author} onChange={(c) =>setAuthor(c.target.value)} />
                    </div>
                    <br />
                    <div className="cat">
                        <label htmlFor="">Category : </label>
                        <input type="text" value={category} onChange={(d) =>setCategory(d.target.value)} />
                    </div>
                    <br />
                    <textarea name="Description" id="per" cols='30' rows="3" value={description} onChange={(e) =>setDescription(e.target.value)}>Description</textarea>
                    <div className="img">
                        <label htmlFor="">Image URL : </label>
                        <input type="text" value={imageUrl} onChange={(f) =>setImageUrl(f.target.value)} />
                    </div>
                    <br />
                    <button id="sad" type="submit">Submit</button>
                   </form>
                   
                </div>
                </div>
                 </div>
               
         
           
              
      
        </div>
     );
}
 
export default AddBook;