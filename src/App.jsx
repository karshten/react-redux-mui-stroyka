import { Box, Container } from "@mui/material"
import { Header } from "components"
import { Route, Routes } from "react-router-dom"
import { Footer } from "./components"
import { Brands, Delivery, Home, PersonalArea } from "./pages"

const NotFound = () => <Container sx={{ maxWidth: '1160px' }}><h1>NotFound</h1></Container>

function App() {
  return (
    <Box className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/personal-area" element={<PersonalArea />} />
        {/* <Route path="/docs" element={<Documentation />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
