import Header  from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
       <BrowserRouter>
        <Header/>

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/leadership" element={<Leadership />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/events" element={<Events />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
     
    </>
  )
}

export default App
