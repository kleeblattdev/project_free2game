/* library import */
import { BrowserRouter, Routes, Route } from "react-router-dom"
/* pages import */
import Home from "./pages/Home"
import AllGames from "./pages/AllGames"
import RecentlyAdded from "./pages/RecentlyAdded"
import DetailView from "./pages/DetailView"

/* SCSS import */
import "./App.scss"

function App() {


  return (
    <div className="App">
      <h4>Test von der App.jsx</h4>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allgames' element={<AllGames />} />
        <Route path='/recentlyadded' element={<RecentlyAdded />}/>
        <Route path='/detailview/:id' element={<DetailView />}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
