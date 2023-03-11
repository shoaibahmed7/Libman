import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Admin from './components/login';
import About from './components/admin';
import BookList from './components/booklist';
import AddBook from './components/addbook';
import AddUsers from './components/addusers';
import ReadBook from './components/readbook';
import UserList from './components/userlist';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Login/>} path="/"/>
          <Route element={<Admin/>} path="/admin"/>
          <Route element={<About/>} path="/ad"/>
          <Route element={<AddBook/>} path="/add-book"/>
          <Route element={<BookList/>} path="/book-list"/>
          <Route element={<UserList/>} path="/add-list"/>
          <Route element={<AddUsers/>} path="/add-users"/>
          <Route element={<ReadBook/>} path="/book-list/:id"/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
