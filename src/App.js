import { useState } from "react"
import CircularProgress from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"

import {ProductList} from "./components/ProductList"
import Cart from "./components/Cart"
import NavBar from "./components/mui/NavBar"

function App() {
  const [isLoading, setIsLoading] = useState(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 2000)

  return (
    <>
      {
        isLoading ? (
        <Box sx = {{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <CircularProgress />
        </Box>
        ):(       
        <div className="App">
        <NavBar />
        <ProductList />
        <Cart />
      </div>
      )}
    </>
  )
}

export default App;
