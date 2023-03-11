import Navbar from "./navbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";  //to fetch id from json
import "../styles/readbook.css"

const ReadBook = () => {

    let params = useParams()
    console.log(params);

    let [book, setBook] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`http://localhost:3000/books/${params.id}`)
            let data =await response.json()
            setBook(data)
        }
        fetchData()
    },[])
    return (
        // <div className="readbook">
        //     <Navbar />
        //   <div className="mas">
        //     <div className="img">
        //         <img src={book.thumbnailUrl} alt="" />
        //     </div>
        //   <div className="nad">
        //    <h1 style={{marginTop:"0px",textAlign:"center"}}>Title : {book.title}</h1>
        //    <h2>Authors : {book.authors} </h2>
        //     <p>SD : {book.shortDescription}</p>
        //     <p>LD : {book.longDescription}</p>
        //    </div>
        //   </div>
        // </div>
        <div className="readbook">
            <Navbar/>
            <div className="ltt">
                <div className="img">
                <img src={book.thumbnailUrl} height="600px" alt="" />

                </div>
               <div className="cin">
               <h1 style={{marginTop:"0px",textAlign:"center"}}>Title : {book.title}</h1>
            <h2>Authors : {book.authors} </h2>
             <p>SD : {book.shortDescription}</p>
             <p>LD : {book.longDescription}</p>
               </div>

            </div>
        </div>
    );
}

export default ReadBook;