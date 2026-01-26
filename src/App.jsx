import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import ViaggioDettagli from "./pages/ViaggioDettagli";
import Viaggi from "./pages/viaggi";

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route element={<Home />} path="/" />
            <Route element={<Viaggi />} path="/viaggi" />
            <Route element={<ViaggioDettagli/>} path="/viaggi/:id"/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App;
