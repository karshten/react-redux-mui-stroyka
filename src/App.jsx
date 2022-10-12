import { Box, Container } from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { Footer, Header } from "./components"
import { checkProductsInLocalStorage } from "./features/Basket/actions"
import {
  Basket, Brands,
  Delivery,
  Home,
  Orders,
  PersonalArea,
  ProductDescription,
  Refund,
  Сatalog,
  Contacts,
  NotFound,
  Thank
} from "./pages"

function App() {

  const { totalCount } = useSelector((state) => state.cart)

  const dispatch = useDispatch()
  useEffect(() => {
    if (!totalCount) {
      dispatch(checkProductsInLocalStorage())
    }
  }, [])

  return (
    <Box className="App" sx={{
      display: "flex",
      minHeight: '100vh',
      flexDirection: "column"
    }}>

      <Header />
      <Box component="main" sx={{ flex: '1 1 0' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/personal-area" element={<PersonalArea />} />
          <Route path="/product" element={<ProductDescription />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/catalog" element={<Сatalog />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/thank" element={<Thank />} />
          {/* <Route path="/catalog:type/category:name/product:id" /> */}
          {/* <Route path="/docs" element={<Documentation />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  )
}

export default App
