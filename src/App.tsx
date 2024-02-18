import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CataloguePage from "./pages/CataloguePage"
import Layout from "./components/Layout"
import AboutPage from "./pages/AboutPage"
import ContactsPage from "./pages/ContactsPage"
import CartPage from "./pages/CartPage"
import ProductPage from "./pages/ProductPage"

const App = () => {
  return (
    <>

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalogue" element={<CataloguePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
