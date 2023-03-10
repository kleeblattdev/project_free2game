/* library import */
import { BrowserRouter, Routes, Route } from "react-router-dom"

/* pages import */
import Home from "./pages/Home"
import AllGames from "./pages/AllGames"
import RecentlyAdded from "./pages/RecentlyAdded"
import DetailView from "./pages/DetailView"

/* component import */
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"

/* SCSS import */
import "./App.scss"

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/allgames' element={<AllGames />}/>
        <Route path='/recentlyadded' element={<RecentlyAdded />}/>
        <Route path='/detailview/:id' element={<DetailView />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
