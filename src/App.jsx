import Header  from "./Components/Header/Header";
import Footer  from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Destination from "./Pages/Destination/Destination";
import Trips from "./Pages/Trip/Trips";
import Contacts from "./Pages/Contact/Contacts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
       <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/trips" element={<Trips/>} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
     
    </>
  )
}

export default App
