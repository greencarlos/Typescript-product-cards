import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage'
import ProductList from './pages/ProductList'
import ProductPage from './pages/ProductPage'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="*" element={<ErrorPage />}/>
        <Route path="/productlist" element={<ProductList />}/>
        <Route path="/productpage/:id" element={<ProductPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
