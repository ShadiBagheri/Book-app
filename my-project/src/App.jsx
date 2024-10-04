import { BrowserRouter, Route, Routes } from "react-router-dom";
//Components
import HomePage from "./components/HomePage.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
      <>
          <Header/>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<HomePage/>}/>
              </Routes>
          </BrowserRouter>
          <Footer/>
      </>
  )
}

export default App
