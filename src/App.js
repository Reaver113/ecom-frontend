import { useState } from "react"
import CircularProgress from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"

import ProductInfo from "./components/ProductInfo"
import ProductListClass from "./components/ProductListClass"
import Cart from "./components/Cart"
import NavBar from "./components/mui/NavBar"

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedItem, setSelectedItem] = useState(null)

  function setItem(item) {
    setSelectedItem(item)
  }

  setTimeout(() => {
    setIsLoading(false)
  }, 1000)

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
        <ProductListClass setItem={setItem}/>
        <ProductInfo item= {selectedItem} />
        <Cart />
      </div>
      )}
    </>
  )
}

export default App;
