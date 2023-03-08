import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"


function App() {


  return (
    <div className="App">
      <h1>warum sehen wir nichts????</h1>
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
