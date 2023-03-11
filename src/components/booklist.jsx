import Navbar from "./navbar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/booklist.css"

const BookList = () => {
  let [books, setBooks] = useState([])

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch("http://localhost:3000/books")
      let data = await response.json()
      setBooks(data)
    }
    fetchData();
  },[])

  let deleteBook = (id,title) => {
   fetch(`http://localhost:3000/books/${id}`,{
    method :"DELETE"
   })
   alert(`${title} has been deleted`)
  }

  return (
    <div className="books">
      <Navbar />
      <div className="books_data">
        {books.map((x) => (
          <div className="bat">
            <div className="img">
              <img height="300px" width="300px" src={x.thumbnailUrl} alt="" />
            </div>
            <div className="con">
              <h1>Title : {x.title}</h1>
              <h1>PageCount : {x.pageCount}</h1>
              <h1>Author : {x.authors}</h1>
              <h1> Category : {x.categories}</h1>
              <div className="mnn">
                <div className="lnn">
                  <Link to={`/book-list/${x.id}`} id="ki" >Read More</Link>
                </div>
                <div className="knn">
                  <button id="ka" onClick={() => deleteBook(x.id,x.title)}>Delete</button>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;