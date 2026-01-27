import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/home.jsx";
import Dettagli from "./pages/Dettagli.jsx";


function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route element={<Home />} path="/" />
            <Route element={<Dettagli/>} path="/:id"/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App;
