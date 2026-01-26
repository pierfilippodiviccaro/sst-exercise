import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import ViaggioDettagli from "./pages/ViaggioDettagli";
import Contattaci from "./pages/Contattaci";

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route element={<Home />} path="/" />
            <Route element={<ViaggioDettagli />} path="/viaggio/:id" />
            <Route element={<Contattaci />} path="/contattaci" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App()
